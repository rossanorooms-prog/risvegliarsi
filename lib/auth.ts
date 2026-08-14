import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "risveg_admin";

function getSecret() {
  // Impostare ADMIN_PASSWORD nelle variabili d'ambiente di Vercel.
  return process.env.ADMIN_PASSWORD || "cambia-questa-password";
}

function sign(value: string) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
}

export function createSessionToken(): string {
  const payload = "admin-ok";
  return `${payload}.${sign(payload)}`;
}

export function isValidSessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  return sign(payload) === signature;
}

export function checkPassword(password: string): boolean {
  return password === getSecret();
}

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  return isValidSessionToken(token);
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;
