import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { token } = await request.json();
  const validToken = process.env.ADMIN_LEADS_TOKEN;

  if (!validToken || token !== validToken) {
    return NextResponse.json({ success: false, message: "الرمز غير صحيح" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/admin",
    maxAge: 60 * 60 * 24,
  });

  return response;
}

export async function GET() {
  const token = process.env.ADMIN_LEADS_TOKEN;
  if (!token) {
    return NextResponse.json({ success: false, message: "غير مفعل" });
  }
  return NextResponse.json({ success: true, token });
}
