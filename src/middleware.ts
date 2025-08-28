// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export const NAME_TOKEN_KEY = "aqerha_auth_token";

function base64UrlDecode(str: string): string {
  return decodeURIComponent(
    Buffer.from(str.replace(/-/g, "+").replace(/_/g, "/"), "base64")
      .toString("binary")
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
}

function decodeJwtPayload(token: string): { exp?: number } | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const decodedPayload = base64UrlDecode(parts[1]);
    return JSON.parse(decodedPayload);
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const token = req.cookies.get(NAME_TOKEN_KEY);

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const payload = decodeJwtPayload(token.value);
  if (payload?.exp) {
    const currentTime = Math.floor(Date.now() / 1000);
    if (payload.exp < currentTime) {
      const res = NextResponse.redirect(new URL("/", req.url));
      res.cookies.delete(NAME_TOKEN_KEY);
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/add-advertisement/:path*",
    "/profile/:path*",
    "/orders/:path*",
    "/order-property/:path*",
    "/inspection-and-evaluation-requests",
    "/real-estate-marketing-request/:path*",
    "/MarketerOrBrokerRequests/:path*",
    "/my-ads/:path*",
    "/edit-company/:path*",
    "/notifications/:path*",
    "/favorites/:path*",
    "/conversations/:path*",
    "/broker-ad/:path*",
    "/evaluation-requests/:path*",
    "/examination-requests/:path*",
    "/my-auctions/:path*",
    "/my-projects/:path*",
    "/promotion-services/:path*",
    "/subscriptions/:path*",
  ],
};
