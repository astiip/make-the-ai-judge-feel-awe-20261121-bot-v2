import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The light from that star left before you were born. It crossed the dark without hurrying, and it is still arriving. Below it the sea keeps its own slow time, and the night is wide enough to hold everything you carry.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
