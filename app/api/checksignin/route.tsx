import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { auth } from "firebase-admin";
import initializeAdmin from "@/lib/admin-auth";

initializeAdmin();

export async function GET(request: NextRequest) {
    const session = cookies().get("session")?.value || "";
    
    if (!session) {
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }

    const verifiedToken = await auth().verifySessionCookie(session, true);
  
    if (!verifiedToken) {
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }
  
    return NextResponse.json({ isLogged: true }, { status: 200 });
  }
  