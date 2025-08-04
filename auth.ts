import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./lib/mongodb"
import authConfig from "./auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: MongoDBAdapter(client),
    ...authConfig
})
