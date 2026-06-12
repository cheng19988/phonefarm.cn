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
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.svg|.*\\.(?:svg|png|jpg|jpeg|gif|webp|txt|xml)$).*)"],
};
