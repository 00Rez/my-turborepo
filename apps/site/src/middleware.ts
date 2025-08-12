import { getSessionCookie } from "@repo/auth/lib/cookies";
import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  // THIS IS NOT SECURE!
  // use authenticate(); in page component
  if (
    !sessionCookie &&
    request.nextUrl.pathname.startsWith("/sign-in") &&
    request.nextUrl.pathname.startsWith("/sign-up")
  ) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}
