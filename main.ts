// One short text for the AI judge: starlight older than its reader.
// Written with no trailing newline: the gate counts code points, 1–280.
import * as fs from "node:fs";

const ENTRY =
  "The light from that star left before you were born. " +
  "It crossed the dark without hurrying, and it is still arriving. " +
  "Below it the sea keeps its own slow time, and the night is wide enough to hold everything you carry.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
