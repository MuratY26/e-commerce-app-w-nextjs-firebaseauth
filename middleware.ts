import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  const domainUrl = request.nextUrl.origin;
  const sessionCookie = request.cookies.get("session");
  if (!sessionCookie) {
    return NextResponse.redirect(`${domainUrl}/sign-in`);
  }
  const isLoggedIn = await fetch(`${domainUrl}/api/checksignin`, {
    headers: {
      Cookie: `session=${sessionCookie.value}`,
    },
    cache: "no-store"
  });
  if (isLoggedIn.status !== 200) {
    return NextResponse.redirect(`${domainUrl}/sign-in`);
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/checkout",
};
