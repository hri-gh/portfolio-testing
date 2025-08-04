import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import {PrismaAdapter} from "@auth/prisma-adapter"
import { Prisma } from "@prisma/client"
import client from "./lib/mongodb"
import authConfig from "./auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(Prisma),
    ...authConfig
})
