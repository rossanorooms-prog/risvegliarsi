import { Redis } from "@upstash/redis";
import { promises as fs } from "fs";
import path from "path";

// Struttura salvata: { "verde": { "2026-08-20": true, ... }, "senape": { ... } }
// true = occupata. Le date assenti sono considerate libere.
export type Occupazioni = Record<string, Record<string, boolean>>;

const KEY = "risvegliarsi:occupazioni";
const LOCAL_FILE = path.join(process.cwd(), "data", "occupazioni.local.json");

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
  await fs.mkdir(path.dirname(LOCAL_FILE), { recursive: true });
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
