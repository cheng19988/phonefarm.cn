import { execSync } from "node:child_process";

execSync("next build", {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_OPTIONS: process.env.NODE_OPTIONS || "--max-old-space-size=4096",
  },
});
