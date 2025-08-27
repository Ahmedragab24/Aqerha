import { cookies } from "next/headers";
import { NAME_TOKEN_KEY } from "./auth-client";

// Server-side cookie operations
export async function setAuthTokenCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(NAME_TOKEN_KEY, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 4 * 24 * 60 * 60, // 4 days in seconds
    path: "/",
  });
}

export async function getAuthTokenCookie(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(NAME_TOKEN_KEY);
  return token?.value || null;
}

export async function removeAuthTokenCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(NAME_TOKEN_KEY);
}

// Main auth functions that use the cookie helpers
export async function getAuthToken(): Promise<string | null> {
  return await getAuthTokenCookie();
}

export async function setAuthToken(token: string): Promise<void> {
  await setAuthTokenCookie(token);
}

export async function removeAuthToken(): Promise<void> {
  await removeAuthTokenCookie();
}
