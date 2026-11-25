import { mkdirSync, writeFileSync } from "node:fs";

const text = `Our office plant died, so facilities replaced it with a plastic one and a sign saying 'growth mindset', the plastic one just got promoted over me.`;

const length = [...text].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 Unicode code points, got ${length}`);
}

if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
