import { auth } from "firebase-admin";
import initializeAdmin from "@/lib/admin-auth";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

initializeAdmin();

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const authorization = headers().get("Authorization");

    if (authorization?.startsWith("Bearer ")) {
      const idToken = authorization.split("Bearer ")[1];
      const verifiedToken = await auth().verifyIdToken(idToken);
      if (verifiedToken) {
        //Generating session cookie
        const expiresIn = 60 * 60 * 24 * 1000; // 1000 day? 1 günü kabul etmiyor?
        const sessionCookie = await auth().createSessionCookie(idToken, {
          expiresIn,
        });
        //console.log(sessionCookie, "**cookie");
        const options = {
          name: "session",
          value: sessionCookie,
          maxAge: expiresIn,
          httpOnly: true,
          secure: true,
        };

        cookies().set(options);
      }
    }
  } catch (error : any) {
    console.error(error.message);
    return NextResponse.json({}, { status: 501})
  }

  return NextResponse.json({}, { status: 200 });
}
