// fetch-inflation.js — run with: node fetch-inflation.js
import { readFileSync, writeFileSync } from "fs";

const API = "https://api.argentinadatos.com/v1/finanzas/indices/inflacion";

async function main() {
  console.log("Fetching inflation data from argentinadatos.com…");
  const res = await fetch(API, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data) || data.length < 12)
    throw new Error("Not enough data from API");

  const last12 = data.slice(-12);
  const date = new Date().toISOString().slice(0, 10);

  const jsonLines = JSON.stringify(last12, null, 2)
    .split("\n")
    .map((line, i) => (i === 0 ? line : "  " + line))
    .join("\n");

  const block = `  // -- INFLATION_DATA:START --
  // Generated ${date} — run \`node fetch-inflation.js\` to update
  const INFLATION_CACHED = ${jsonLines};
  const INFLATION_CACHE_DATE = "${date}";
  // -- INFLATION_DATA:END --`;

  const html = readFileSync("index.html", "utf8");
  const updated = html.replace(
    /  \/\/ -- INFLATION_DATA:START --[\s\S]*?\/\/ -- INFLATION_DATA:END --/,
    block
  );

  if (updated === html) throw new Error("Sentinel block not found in index.html");

  writeFileSync("index.html", updated, "utf8");
  console.log(`✓ Wrote ${last12.length} months of inflation data (through ${last12.at(-1).fecha})`);
}

main().catch(err => { console.error("Error:", err.message); process.exit(1); });
