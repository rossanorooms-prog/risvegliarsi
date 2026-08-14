import { NextRequest, NextResponse } from "next/server";
import { checkPassword, createSessionToken, ADMIN_COOKIE_NAME, isAdmin } from "@/lib/auth";

export async function GET() {
  const admin = await isAdmin();
  return NextResponse.json({ ok: admin });
}

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (!checkPassword(password)) {
    return NextResponse.json({ ok: false, error: "Password errata" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 giorni
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE_NAME, "", { path: "/", maxAge: 0 });
  return res;
}
