import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.js";

console.log(process.env.DATABASE_URL);

const adapter = new PrismaMariaDb(process.env.DATABASE_URL || "");
const prisma = new PrismaClient({ adapter });

export { prisma };
