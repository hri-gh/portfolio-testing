import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"
import prismadb from "@/lib/prismadb";


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody

        // Check if user exists
        const user = await prismadb.user.findFirst({ where: {email} }) // This user saved in the database

        if (!user) {
            return NextResponse.json({ error: "Invalid Credentials" }, { status: 400 })
        }

        // Check if password is correct
        const validPassword = await bcrypt.compare(password, user.password) // 'password' is coming from reqBody && 'user.password' from database

        // If the password is not valid
        if (!validPassword) {
            return NextResponse.json({ error: "hInvalid Credentials"}, { status: 400  })
        }

        // Create token data
        const tokenData = {
            id: user.id,
        }

        const userInitials = user.username[0].toUpperCase();

        // Create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })

        const response = NextResponse.json({ message: "Login successful", success: true, userInitials })
        response.cookies.set("token", token)

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
