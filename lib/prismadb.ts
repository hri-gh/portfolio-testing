// lib/prismadb.ts
import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSQL({
  url: process.env.DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

declare global {
  var prismadb: PrismaClient | undefined;
}

let prismadb: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prismadb = new PrismaClient({ adapter } as any);
} else {
  if (!globalThis.prismadb) {
    globalThis.prismadb = new PrismaClient({ adapter } as any);
  }
  prismadb = globalThis.prismadb;
}

export default prismadb;
