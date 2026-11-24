import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I missed the deadline because the deadline moved to a different timezone and forgot to tell me.";

if (!TEXT.trim() || TEXT.length > 200) throw new Error("entry text out of range");
if (TEXT.includes("\n")) throw new Error("entry must be exactly one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
