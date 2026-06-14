import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRIMARY_HOST = "www.phonefarm.cn";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const isLocal = host === "localhost" || host.endsWith(".local") || /^\d+\.\d+\.\d+\.\d+$/.test(host);

  if (!isLocal && host === "phonefarm.cn") {
    const url = request.nextUrl.clone();
    url.host = PRIMARY_HOST;
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  if (!isLocal && host.endsWith(".vercel.app")) {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${PRIMARY_HOST}`);
    return NextResponse.redirect(url, 301);
  }

  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  response.headers.set("x-pathname", pathname);
  response.headers.set("x-site-lang", pathname.startsWith("/zh") ? "zh-CN" : "en");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.svg|baidu_verify|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
