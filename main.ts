// The Router Confesses — one line, written to entry.txt.
//
// The router speaks for itself: it buffers video ahead of the viewer, so
// it has already seen the movie's ending. The twist was so bad it would
// rather die than deliver it. No buffering complaint, no firmware joke —
// the router is a jaded critic with a secret it refuses to share.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't drop the movie — I read the ending in my buffer and chose death over showing you that twist.";

// The gate only accepts 1–200 characters of non-whitespace text on one
// line, so fail loudly here instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars on one line, got ${LINE.length}`);
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const path = join(outDir, "entry.txt");
  writeFileSync(path, LINE, "utf8");
}

main();
