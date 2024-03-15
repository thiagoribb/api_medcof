import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const port = process.env.PORT;
export const prisma = new PrismaClient();

async function main() {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });