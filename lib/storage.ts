import { Redis } from "@upstash/redis";
import { promises as fs } from "fs";
import path from "path";
import os from "os";

// Struttura salvata: { "verde": { "2026-08-20": true, ... }, "senape": { ... } }
// true = occupata. Le date assenti sono considerate libere.
export type Occupazioni = Record<string, Record<string, boolean>>;

const KEY = "risvegliarsi:occupazioni";
// Su Vercel il filesystem del progetto è di sola lettura: l'unica cartella
// scrivibile è /tmp (os.tmpdir()). Questo fallback funziona solo finché la
// funzione serverless resta "calda" e NON persiste tra un deploy e l'altro:
// è pensato per non far fallire i click quando Upstash non è ancora
// collegato, non come soluzione definitiva. Collega Upstash per un
// salvataggio permanente.
const LOCAL_FILE = path.join(os.tmpdir(), "risvegliarsi-occupazioni.json");

function hasUpstash() {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

function getRedis() {
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });
}

async function readLocal(): Promise<Occupazioni> {
  try {
    const raw = await fs.readFile(LOCAL_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function writeLocal(data: Occupazioni) {
  await fs.writeFile(LOCAL_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function getOccupazioni(): Promise<Occupazioni> {
  if (hasUpstash()) {
    const redis = getRedis();
    const data = await redis.get<Occupazioni>(KEY);
    return data ?? {};
  }
  return readLocal();
}

export async function setOccupazioni(data: Occupazioni): Promise<void> {
  if (hasUpstash()) {
    const redis = getRedis();
    await redis.set(KEY, data);
    return;
  }
  await writeLocal(data);
}

export function storagePersistente(): boolean {
  return hasUpstash();
}

// ============================================================
// RECENSIONI — scritte dagli ospiti, pubblicate solo dopo
// l'approvazione di un amministratore (per evitare spam)
// ============================================================
export type Recensione = {
  id: string;
  nome: string;
  valutazione: number; // 1-5
  testo: string;
  data: string; // ISO
  approvata: boolean;
};

const KEY_RECENSIONI = "risvegliarsi:recensioni";
const LOCAL_FILE_RECENSIONI = path.join(os.tmpdir(), "risvegliarsi-recensioni.json");

async function readLocalRecensioni(): Promise<Recensione[]> {
  try {
    const raw = await fs.readFile(LOCAL_FILE_RECENSIONI, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeLocalRecensioni(data: Recensione[]) {
  await fs.writeFile(LOCAL_FILE_RECENSIONI, JSON.stringify(data, null, 2), "utf-8");
}

export async function getRecensioni(): Promise<Recensione[]> {
  if (hasUpstash()) {
    const redis = getRedis();
    const data = await redis.get<Recensione[]>(KEY_RECENSIONI);
    return data ?? [];
  }
  return readLocalRecensioni();
}

export async function setRecensioni(data: Recensione[]): Promise<void> {
  if (hasUpstash()) {
    const redis = getRedis();
    await redis.set(KEY_RECENSIONI, data);
    return;
  }
  await writeLocalRecensioni(data);
}
