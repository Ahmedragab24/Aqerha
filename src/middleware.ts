// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getAuthToken } from "./lib/auth/auth-server";

export function middleware(req: NextRequest) {
  const token = getAuthToken();

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/add-advertisement/:path*",
    "/profile/:path*",
    "/orders/:path*",
    "/order-property/:path*",
    // "/inspection-and-evaluation-requests",
    "/real-estate-marketing-request/:path*",
    "/MarketerOrBrokerRequests/:path*",
    "/my-ads/:path*",
    "/edit-company/:path*",
    "/notifications/:path*",
    "/favorites/:path*",
  ],
};
