import path from "node:path";
import { fileURLToPath } from "node:url";

/** Static repo root — avoids process.cwd() so Vercel NFT does not trace the whole tree. */
export const PROJECT_ROOT = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  ".."
);
