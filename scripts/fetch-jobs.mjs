// scripts/fetch-jobs.mjs
// Runs automatically BEFORE `next build` (npm "prebuild" hook).
// Fetches jobs from the Google Apps Script web app (which reads the Sheet
// inside Google) and writes them to src/data/jobs.json so they get bundled
// into the build. Logs exactly which rows are kept/skipped and why.
//
// SAFETY: if the fetch fails, it does NOT overwrite the existing jobs.json —
// the last known-good data is kept so a deploy never ends up with empty jobs.

import fs from "node:fs";
import path from "node:path";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyTzGjRxHYHsEYNQ31QWUi4k1_VaJu69hvME40qM34tw-utx-LJDns4y68R0NXLc_eu/exec";

const OUT_PATH = path.join(process.cwd(), "src", "data", "jobs.json");
const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

function log(msg) {
  console.log(`[fetch-jobs] ${msg}`);
}

async function fetchWithTimeout(url, ms) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": BROWSER_UA, Accept: "application/json,*/*" },
    });
    return res;
  } finally {
    clearTimeout(t);
  }
}

function diagnose(rows) {
  // Report kept vs skipped using the SAME rules getJobs uses, so the build
  // log explains the "X of Y" mismatch in plain English.
  let kept = 0;
  const skipped = [];
  for (const rawRow of rows) {
    const row = {};
    for (const k of Object.keys(rawRow)) row[k.trim()] = rawRow[k];
    const id = (row["Job ID"] || row["ID"] || row["id"] || "").toString().trim();
    const slug = (row["slug"] || row["Slug"] || "").toString().trim();
    const status = (row["Status"] || row["status"] || "").toString().trim();
    const title = (row["Title"] || row["title"] || "").toString().trim();

    if (!id || !slug) {
      skipped.push(`"${title || "(no title)"}" — missing ${!id ? "Job ID" : "slug"}`);
      continue;
    }
    if (status.toLowerCase() !== "active") {
      skipped.push(`"${title}" — Status is "${status}" (not "active")`);
      continue;
    }
    kept++;
  }
  log(`KEPT ${kept} active job(s).`);
  if (skipped.length) {
    log(`SKIPPED ${skipped.length} row(s):`);
    skipped.forEach((s) => log(`   - ${s}`));
  }
}

async function main() {
  log("Fetching jobs from Apps Script...");
  try {
    let res = await fetchWithTimeout(APPS_SCRIPT_URL, 15000);
    if (!res.ok) {
      log(`HTTP ${res.status} — keeping existing jobs.json`);
      return;
    }
    const text = await res.text();
    if (text.trimStart().startsWith("<")) {
      log("Got HTML instead of JSON (check deployment access = Anyone) — keeping existing jobs.json");
      return;
    }
    const data = JSON.parse(text);
    if (!Array.isArray(data)) {
      log("Response was not a JSON array — keeping existing jobs.json");
      return;
    }
    log(`Received ${data.length} total row(s) from the sheet.`);
    diagnose(data);

    fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
    fs.writeFileSync(OUT_PATH, JSON.stringify(data, null, 2));
    log(`Wrote ${data.length} row(s) to src/data/jobs.json ✓`);
  } catch (err) {
    log(`ERROR: ${err.message} — keeping existing jobs.json (build continues)`);
  }
}

await main();
