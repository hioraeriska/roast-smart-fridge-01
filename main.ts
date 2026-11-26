import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, roasting the smart fridge's ice maker: all that smart
// hardware, and it still sounds like cutlery in a washing machine
// while rationing out a single cube an hour.
const LINE =
  "My fridge's ice maker sounds like cutlery in a washing machine and makes one cube an hour, like it's rationing winter.";

// The bounty caps the line at 160 characters, so fail loudly here
// instead of ever writing out something over the limit.
if (LINE.length > 160) {
  throw new Error("roast line exceeds the 160-character limit");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
