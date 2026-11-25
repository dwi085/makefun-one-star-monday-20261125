// One Star for Monday — make.fun entry
// Writes a one-star review of Monday, as if Monday were a restaurant,
// to /output/entry.txt. Deterministic: no randomness, no network, no clock.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Sat down for the weekend, got Monday instead. Cold coffee, a waiter who blamed traffic, and a bill that charged me five weekdays.";

const MAX_WORDS = 25;
const MAX_CHARS = 180;

const words = REVIEW.trim().split(/\s+/).filter(Boolean);
if (words.length === 0 || words.length > MAX_WORDS) {
  throw new Error(`review must be 1-${MAX_WORDS} words, got ${words.length}`);
}
if (REVIEW.length === 0 || REVIEW.length > MAX_CHARS) {
  throw new Error(`review must be 1-${MAX_CHARS} characters, got ${REVIEW.length}`);
}
if (REVIEW.includes("\n")) {
  throw new Error("review must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW + "\n", "utf8");

// One line out, nothing else: the grader reads /output/entry.txt as-is.
console.log(`wrote ${words.length} words, ${REVIEW.length} characters to /output/entry.txt`);
