import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {

  const token = req.cookies.get("accessToken")?.value;
  const { pathname } = req.nextUrl;

  // Protect dashboard
  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Prevent logged-in user going to login page
  // if (token && pathname === "/login") {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};



