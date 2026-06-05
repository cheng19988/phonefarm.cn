import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../src/generated/prisma/client.js";
import { seedDatabase } from "../src/lib/seed-db.js";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || "file:./prisma/dev.db",
});
const prisma = new PrismaClient({ adapter });

seedDatabase(prisma)
  .then(() => console.log("Seeded products and admin user"))
  .catch(console.error)
  .finally(() => prisma.$disconnect());
