import fs from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";

// Load public config exclusively from centralized secrets vault outside all Git repos (../secrets/web-public.env)
function loadCentralWebEnv(): Record<string, string> {
  const envFile = path.resolve(process.cwd(), "../secrets/web-public.env");
  const out: Record<string, string> = {};
  if (!fs.existsSync(envFile)) return out;
  for (const line of fs.readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (key.startsWith("NEXT_PUBLIC_")) {
      out[key] = process.env[key] ?? val;
    }
  }
  return out;
}

const nextConfig: NextConfig = {
  env: loadCentralWebEnv(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
