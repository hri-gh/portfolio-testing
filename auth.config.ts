// auth.config.ts
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"

export default {
    providers: [GitHub, Google],
    callbacks: {
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth
        },
        signIn({ profile }) {
            return profile?.email === "hri.gh@outlook.com"
        }
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.AUTH_SECRET
} satisfies NextAuthConfig
