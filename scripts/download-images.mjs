#!/usr/bin/env node
/**
 * One-time asset sync: downloads every real image this site references from
 * the reference site (https://www.fishcoolrunnings.com/images/...) into
 * public/images/, preserving the same folder structure the code already
 * expects (see src/data/site.ts, homeImages.ts, services.ts, serviceAreas.ts,
 * gallery.ts, blog.ts, and the hero images in src/pages/*.astro — they all
 * point at local "/images/..." paths that this script fills in).
 *
 * Usage:
 *   node scripts/download-images.mjs
 *
 * Requires Node 18+ (built-in fetch). Safe to re-run — it skips any file
 * that already exists locally unless you pass --force.
 */

import { mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'public', 'images');
const REMOTE_BASE = 'https://www.fishcoolrunnings.com/images';
const FORCE = process.argv.includes('--force');

// Every relative image path referenced anywhere in src/ (root files, plus
// staff/press/sponsors/services/areas/gallery subfolders).
const IMAGE_PATHS = [
  // Root — page heroes, logo, default OG image
  'logo.webp',
  'og-default.jpg',
  'hero-services-hub.webp',
  'hero-charter-info.webp',
  'hero-blog.webp',
  'hero-reviews.webp',
  'hero-areas-hub.webp',

  // Captain photo
  'staff/captain-jason-robinson.webp',

  // Press mentions (home page marquee)
  'press/texas-insider-fishing-report.webp',
  'press/florida-insider-fishing-report.webp',

  // Sponsor logos (home page marquee)
  'sponsors/bass-pro-shops.webp',
  'sponsors/chaos-rods.webp',
  'sponsors/cmor-mapping.webp',
  'sponsors/rr-tackle.webp',
  'sponsors/scanstrut.svg',
  'sponsors/tigress.webp',

  // Service detail secondary images
  'services/offshore-fishing-1.webp',
  'services/offshore-fishing-2.webp',
  'services/inshore-fishing-1.webp',
  'services/bottom-fishing-1.webp',

  // Service area "local knowledge" images
  'areas/fort-lauderdale-1.webp',
  'areas/pompano-beach-1.webp',
  'areas/dania-beach-1.webp',
  'areas/deerfield-beach-1.webp',
  'areas/boca-raton-1.webp',
  'areas/miami-1.webp',

  // Gallery — offshore
  'gallery/offshore/1.webp',
  'gallery/offshore/2.webp',
  'gallery/offshore/3.webp',
  'gallery/offshore/4.webp',
  'gallery/offshore/10.webp',
  'gallery/offshore/12.webp',
  'gallery/offshore/15.webp',
  'gallery/offshore/20.webp',
  'gallery/offshore/22.webp',
  'gallery/offshore/25.webp',
  'gallery/offshore/30.webp',
  'gallery/offshore/35.webp',
  'gallery/offshore/40.webp',
  'gallery/offshore/45.webp',
  'gallery/offshore/50.webp',
  'gallery/offshore/60.webp',
  'gallery/offshore/70.webp',
  'gallery/offshore/80.webp',
  'gallery/offshore/sailfish-boatside.webp',
  'gallery/offshore/mahiandsail.webp',
  'gallery/offshore/angler-big-mahi.webp',
  'gallery/offshore/kid-captain-barracuda.webp',
  'gallery/offshore/wahookings.webp',
  'gallery/offshore/bigking.webp',
  'gallery/offshore/12-easy-resize.com.webp',
  'gallery/offshore/44.webp',
  'gallery/offshore/f4ecda89-893e-40db-984b-2b7337e58647.webp',
  'gallery/offshore/img-0648.webp',
  'gallery/offshore/003feb9d-d356-4059-8270-6fd1897b9105.webp',
  'gallery/offshore/2-easy-resize.com3.webp',
  'gallery/offshore/41.webp',
  'gallery/offshore/33.webp',
  'gallery/offshore/29.webp',
  'gallery/offshore/48409101-535112720307408-4005294163024150528-n.webp',
  'gallery/offshore/img-53172.webp',
  'gallery/offshore/201809131137054-image4.webp',
  'gallery/offshore/gallery1.webp',
  'gallery/offshore/sailrelease.webp',
  'gallery/offshore/kings.webp',
  'gallery/offshore/bottom-fishing.webp',

  // Gallery — inshore
  'gallery/inshore/ea7aa9c9-eae9-46af-8c27-12fc2d8e001c.webp',
  'gallery/inshore/snook1.webp',
  'gallery/inshore/201809242106293-image4.webp',
  'gallery/inshore/51.webp',
  'gallery/inshore/61.webp',
  'gallery/inshore/97.webp',
  'gallery/inshore/201809242106294-image5.webp',

  // Gallery — bottom fishing
  'gallery/bottom/angler-mutton-snapper.webp',
  'gallery/bottom/two-anglers-grouper.webp',

  // Gallery — boat
  'gallery/boat/boat-11.webp',
  'gallery/boat/contender-clear-water-side.webp',
  'gallery/boat/contender-clear-water.webp',
  'gallery/boat/contender-ftl-marina.webp',
  'gallery/boat/contender-ftl-waterway.webp',
  'gallery/boat/image121.webp',
];

async function fileExists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function downloadOne(relPath) {
  const dest = path.join(OUTPUT_DIR, relPath);

  if (!FORCE && (await fileExists(dest))) {
    return { relPath, status: 'skipped' };
  }

  const url = `${REMOTE_BASE}/${relPath}`;
  const res = await fetch(url);
  if (!res.ok) {
    return { relPath, status: 'failed', reason: `HTTP ${res.status}` };
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buffer);
  return { relPath, status: 'downloaded', bytes: buffer.length };
}

async function main() {
  console.log(`Downloading ${IMAGE_PATHS.length} images to ${OUTPUT_DIR}...\n`);

  const results = [];
  // Sequential with light concurrency to be polite to the source server.
  const CONCURRENCY = 6;
  let cursor = 0;

  async function worker() {
    while (cursor < IMAGE_PATHS.length) {
      const relPath = IMAGE_PATHS[cursor++];
      try {
        const result = await downloadOne(relPath);
        results.push(result);
        const icon = result.status === 'downloaded' ? '✓' : result.status === 'skipped' ? '·' : '✗';
        console.log(`${icon} ${relPath}${result.reason ? ` (${result.reason})` : ''}`);
      } catch (err) {
        results.push({ relPath, status: 'failed', reason: err.message });
        console.log(`✗ ${relPath} (${err.message})`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  const downloaded = results.filter((r) => r.status === 'downloaded').length;
  const skipped = results.filter((r) => r.status === 'skipped').length;
  const failed = results.filter((r) => r.status === 'failed');

  console.log(`\nDone: ${downloaded} downloaded, ${skipped} already present, ${failed.length} failed.`);
  if (failed.length > 0) {
    console.log('\nFailed:');
    failed.forEach((f) => console.log(`  - ${f.relPath}: ${f.reason}`));
    process.exitCode = 1;
  }
}

main();
