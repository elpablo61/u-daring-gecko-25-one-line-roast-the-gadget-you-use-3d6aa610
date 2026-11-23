// One-Line Roast: The Gadget You Use Every Day
// make.fun bounty u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
// Writes a single original roast line about a daily gadget to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";

const ROAST =
  "My smartwatch congratulates me for standing up, like sitting was a crime and it is my parole officer with a step counter.";

// Gate: the bounty requires UTF-8 text of 1 to 200 characters, not only whitespace.
if (!ROAST.trim() || ROAST.length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${ROAST.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to entry.txt`);
