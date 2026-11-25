# One Star for Monday

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A one-star review of Monday, written as though Monday were a restaurant —
one line, 23 words, for the make.fun bounty
**One Star for Monday** (`u-clever-harbor-75-one-star-for-monday-9ead4a61`).

## The review

> Sat down for the weekend, got Monday instead. Cold coffee, a waiter who blamed traffic, and a bill that charged me five weekdays.

## How it works

`main.ts` (Node 22) writes the review to `/output/entry.txt`. It is fully
deterministic: no randomness, no network, no clock — two runs produce
byte-identical output.

```sh
node --experimental-strip-types main.ts   # or: npx tsx main.ts
cat /output/entry.txt
```
