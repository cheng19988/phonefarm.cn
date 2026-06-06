/**
 * Production smoke test: Contact RFQ → Admin list → Status PATCH → CSV export.
 * Credentials: ADMIN_TEST_EMAIL / ADMIN_TEST_PASSWORD (or ADMIN_EMAIL / ADMIN_PASSWORD).
 * Never logs or prints passwords.
 */
import { config } from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
config({ path: path.join(root, ".env"), quiet: true });
const smokeEnv = path.join(root, ".env.smoke-test.local");
if (fs.existsSync(smokeEnv)) config({ path: smokeEnv, quiet: true, override: true });

const BASE = process.env.SMOKE_TEST_BASE || "https://www.phonefarm.cn";

const adminEmail = process.env.ADMIN_TEST_EMAIL || process.env.ADMIN_EMAIL || "";
const adminPassword = process.env.ADMIN_TEST_PASSWORD || process.env.ADMIN_PASSWORD || "";

const now = new Date();
const stamp =
  now.getFullYear().toString() +
  String(now.getMonth() + 1).padStart(2, "0") +
  String(now.getDate()).padStart(2, "0") +
  "-" +
  String(now.getHours()).padStart(2, "0") +
  String(now.getMinutes()).padStart(2, "0") +
  String(now.getSeconds()).padStart(2, "0");

const testRfq = {
  name: `Auto Test Buyer ${stamp}`,
  email: `auto-test-${stamp}@example.com`,
  whatsapp: "+123456789",
  company: "Auto Test Company",
  country: "United States",
  purchaseType: "motherboard-box",
  deviceQuantity: "20",
  devicePlatform: "android",
  connectionMode: "otg-lan",
  customRomNeeded: "not-sure",
  shippingCountry: "United States",
  productInterest: "Android Motherboard Box",
  message: "Automated RFQ validation for admin workflow.",
};

const report = {
  credentialsFromEnv: Boolean(adminEmail && adminPassword),
  contactPost200: false,
  contactHttpStatus: 0,
  contactOkBody: false,
  testEmail: testRfq.email,
  loginSuccess: false,
  adminShowsRfq: false,
  statusNewToContacted: false,
  statusContactedToQuoted: false,
  statusQuotedToClosed: false,
  statusClosedPersists: false,
  csvExport200: false,
  csvContainsTestRfq: false,
  csvHeadersComplete: false,
  unauthExport401: false,
  unauthPatch401: false,
  needsCodeFix: false,
  errors: [],
};

class CookieJar {
  constructor() {
    /** @type {Map<string, string>} */
    this.cookies = new Map();
  }

  /** @param {Response} response */
  absorb(response) {
    const setCookies =
      typeof response.headers.getSetCookie === "function"
        ? response.headers.getSetCookie()
        : [];
    if (setCookies.length === 0) {
      const single = response.headers.get("set-cookie");
      if (single) setCookies.push(single);
    }
    for (const raw of setCookies) {
      const [pair] = raw.split(";");
      const eq = pair.indexOf("=");
      if (eq === -1) continue;
      const name = pair.slice(0, eq).trim();
      const value = pair.slice(eq + 1).trim();
      if (name) this.cookies.set(name, value);
    }
  }

  header() {
    return [...this.cookies.entries()].map(([k, v]) => `${k}=${v}`).join("; ");
  }
}

/** @param {string} url @param {RequestInit & { jar?: CookieJar }} init */
async function fetchWithJar(url, init = {}) {
  const { jar, headers: initHeaders, ...rest } = init;
  const headers = new Headers(initHeaders);
  if (jar?.header()) headers.set("Cookie", jar.header());
  const res = await fetch(url, { ...rest, headers, redirect: "manual" });
  jar?.absorb(res);
  return res;
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** @param {string} html @param {string} email */
function findContactId(html, email) {
  const esc = escapeRe(email);
  const patterns = [
    new RegExp(`"id":"(c[a-z0-9]{20,})"[\\s\\S]{0,800}?${esc}`),
    new RegExp(`${esc}[\\s\\S]{0,800}?"id":"(c[a-z0-9]{20,})"`),
    new RegExp(`"email":"${esc}"[\\s\\S]{0,800}?"id":"(c[a-z0-9]{20,})"`),
    new RegExp(`"id":"(c[a-z0-9]{20,})"[\\s\\S]{0,800}?"email":"${esc}"`),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return m[1];
  }
  return null;
}

/** @param {string} html @param {string} email @param {string} status */
function adminHtmlHasStatus(html, email, status) {
  const idx = html.indexOf(email);
  if (idx === -1) return false;
  const window = html.slice(Math.max(0, idx - 400), idx + 1200);
  return (
    window.includes(`>${status}<`) ||
    window.includes(`value="${status}" selected`) ||
    window.includes(`"${status}"`) && window.includes("RFQ Inquiries")
  );
}

/** @param {string} html */
function adminHtmlShowsRfq(html) {
  const checks = [
    testRfq.name,
    testRfq.email,
    "United States",
    "Android Motherboard Box",
    "20",
    "otg-lan",
  ];
  const hasAll = checks.every((t) => html.includes(t));
  const hasNew =
    adminHtmlHasStatus(html, testRfq.email, "New") ||
    html.includes("New") && html.includes(testRfq.email);
  return hasAll && hasNew;
}

/** @param {CookieJar} jar @param {string} id @param {string} status */
async function patchStatus(jar, id, status) {
  const res = await fetchWithJar(`${BASE}/api/admin/contacts`, {
    method: "PATCH",
    jar,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status }),
  });
  if (!res.ok) {
    report.errors.push(`PATCH ${status}: HTTP ${res.status}`);
    return false;
  }
  const body = await res.json();
  return body.status === status;
}

/** @param {CookieJar} jar */
async function fetchAdminHtml(jar) {
  let url = `${BASE}/admin`;
  for (let i = 0; i < 5; i++) {
    const res = await fetchWithJar(url, { jar });
    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get("location");
      if (!loc) break;
      url = loc.startsWith("http") ? loc : `${BASE}${loc}`;
      continue;
    }
    return res.text();
  }
  return "";
}

async function submitContact() {
  const form = new FormData();
  for (const [k, v] of Object.entries(testRfq)) form.append(k, v);
  const res = await fetch(`${BASE}/api/contact`, { method: "POST", body: form });
  report.contactHttpStatus = res.status;
  report.contactPost200 = res.status === 200;
  const text = await res.text();
  if (!report.contactPost200) {
    report.errors.push(`Contact POST returned HTTP ${res.status}${text ? `: ${text.slice(0, 200)}` : " (empty body)"}`);
  }
  try {
    const json = JSON.parse(text);
    report.contactOkBody = json.ok === true;
  } catch {
    report.errors.push("Contact response is not JSON");
  }
}

async function loginAdmin() {
  if (!adminEmail || !adminPassword) {
    report.errors.push("Missing admin credentials in environment variables");
    return null;
  }
  const jar = new CookieJar();
  const res = await fetchWithJar(`${BASE}/api/auth/login`, {
    method: "POST",
    jar,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: adminEmail, password: adminPassword }),
  });
  report.loginSuccess = res.status === 200;
  if (!report.loginSuccess) {
    let detail = `HTTP ${res.status}`;
    try {
      const j = await res.json();
      if (j.error) detail += ` (${j.error})`;
    } catch {
      /* ignore */
    }
    report.errors.push(`Admin login failed: ${detail}`);
    return null;
  }
  const body = await res.json().catch(() => ({}));
  if (body.ok !== true) {
    report.loginSuccess = false;
    report.errors.push("Admin login response missing ok:true");
    return null;
  }
  if (!jar.cookies.has("session")) {
    report.errors.push("Login succeeded but no session cookie received");
  }
  return jar;
}

async function testUnauth() {
  const exportRes = await fetch(`${BASE}/api/admin/contacts/export`);
  report.unauthExport401 = exportRes.status === 401;

  const patchRes = await fetch(`${BASE}/api/admin/contacts`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: "cplaceholder000000000000000", status: "Contacted" }),
  });
  report.unauthPatch401 = patchRes.status === 401;
}

async function testCsv(jar) {
  const res = await fetchWithJar(`${BASE}/api/admin/contacts/export`, { jar });
  report.csvExport200 = res.status === 200;
  if (!res.ok) {
    report.errors.push(`CSV export: HTTP ${res.status}`);
    return;
  }
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("csv") && !ct.includes("text/csv") && !ct.includes("text/plain")) {
    report.errors.push(`CSV unexpected Content-Type: ${ct}`);
  }
  const csv = await res.text();
  report.csvContainsTestRfq = csv.includes(testRfq.email);
  const requiredHeaders = [
    "createdAt",
    "name",
    "email",
    "company",
    "country",
    "productType",
    "quantity",
    "connectionMode",
    "message",
    "status",
  ];
  const headerLine = csv.split("\n")[0] || "";
  report.csvHeadersComplete = requiredHeaders.every((h) => headerLine.includes(h));
  if (!report.csvHeadersComplete) {
    report.errors.push(`CSV header missing fields. Got: ${headerLine}`);
  }
}

async function main() {
  console.log("=== Production RFQ Admin Smoke Test ===");
  console.log(`Target: ${BASE}`);
  console.log(`Test RFQ name: ${testRfq.name}`);
  console.log(`admin credentials loaded from env: ${report.credentialsFromEnv ? "yes" : "no"}\n`);

  await submitContact();

  await testUnauth();

  const jar = await loginAdmin();
  if (jar) {
    let html = await fetchAdminHtml(jar);
    if (html.includes("/login") && !html.includes(testRfq.email)) {
      report.errors.push("Admin page redirected to login or empty session");
    }
    report.adminShowsRfq = adminHtmlShowsRfq(html);

    const contactId = findContactId(html, testRfq.email);
    if (!contactId) {
      report.errors.push("Could not extract contact id from admin HTML for PATCH tests");
    } else {
      report.statusNewToContacted = await patchStatus(jar, contactId, "Contacted");
      html = await fetchAdminHtml(jar);
      if (!adminHtmlHasStatus(html, testRfq.email, "Contacted")) {
        report.statusNewToContacted = false;
        report.errors.push("Contacted not visible after refresh");
      }

      report.statusContactedToQuoted = await patchStatus(jar, contactId, "Quoted");
      html = await fetchAdminHtml(jar);
      if (!adminHtmlHasStatus(html, testRfq.email, "Quoted")) {
        report.statusContactedToQuoted = false;
        report.errors.push("Quoted not visible after refresh");
      }

      report.statusQuotedToClosed = await patchStatus(jar, contactId, "Closed");
      html = await fetchAdminHtml(jar);
      report.statusClosedPersists = adminHtmlHasStatus(html, testRfq.email, "Closed");
      if (!report.statusClosedPersists) {
        report.statusQuotedToClosed = false;
        report.errors.push("Closed not visible after refresh");
      }
    }

    await testCsv(jar);
  }

  const allPass =
    report.contactPost200 &&
    report.contactOkBody &&
    report.loginSuccess &&
    report.adminShowsRfq &&
    report.statusNewToContacted &&
    report.statusContactedToQuoted &&
    report.statusQuotedToClosed &&
    report.statusClosedPersists &&
    report.csvExport200 &&
    report.csvContainsTestRfq &&
    report.csvHeadersComplete &&
    report.unauthExport401 &&
    report.unauthPatch401;

  report.needsCodeFix = !allPass;

  console.log("--- Acceptance Report ---");
  console.log(`1.  POST /api/contact HTTP 200: ${report.contactPost200 ? "PASS" : "FAIL"}`);
  console.log(`2.  Test RFQ email: ${report.testEmail}`);
  console.log(`3.  Admin login success: ${report.loginSuccess ? "yes" : "no"}`);
  console.log(`4.  Admin page shows test RFQ: ${report.adminShowsRfq ? "PASS" : "FAIL"}`);
  console.log(`5.  Status New -> Contacted: ${report.statusNewToContacted ? "PASS" : "FAIL"}`);
  console.log(`6.  Status Contacted -> Quoted: ${report.statusContactedToQuoted ? "PASS" : "FAIL"}`);
  console.log(`7.  Status Quoted -> Closed: ${report.statusQuotedToClosed ? "PASS" : "FAIL"}`);
  console.log(`8.  Closed persists after refresh: ${report.statusClosedPersists ? "PASS" : "FAIL"}`);
  console.log(`9.  CSV export HTTP 200: ${report.csvExport200 ? "PASS" : "FAIL"}`);
  console.log(`10. CSV contains test RFQ: ${report.csvContainsTestRfq ? "PASS" : "FAIL"}`);
  console.log(`11. CSV headers complete: ${report.csvHeadersComplete ? "PASS" : "FAIL"}`);
  console.log(`12. Unauth export 401: ${report.unauthExport401 ? "PASS" : "FAIL"}`);
  console.log(`13. Unauth PATCH 401: ${report.unauthPatch401 ? "PASS" : "FAIL"}`);
  console.log(`14. Needs code fix: ${report.needsCodeFix ? "yes" : "no"}`);

  if (report.errors.length) {
    console.log("\n--- Errors ---");
    for (const e of report.errors) console.log(`- ${e}`);
  }

  console.log("");
  if (allPass) {
    console.log("P1 RFQ admin workflow automated smoke test passed");
    process.exit(0);
  } else {
    console.log("P1 RFQ admin workflow automated smoke test FAILED");
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Smoke test crashed:", err.message);
  process.exit(1);
});
