import { NextResponse, NextRequest } from "next/server";
import bcrypt from 'bcryptjs'
import { getDataFromToken } from "@/helpers/get-data-from-token";

import prismadb from "@/lib/prismadb";


export async function PATCH(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request)
        const validUser = await prismadb.user.findUnique({ where: { id: userId } })

        if (!validUser) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        const reqBody = await request.json()
        const { username, currentPassword, newPassword } = reqBody;
        //console.log(email)

        // Validate input
        if (!username || !currentPassword || !newPassword) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Check if users already exists
        // const existingUser = await prismadb.user.findFirst({
        //     where: { OR: [{ username }, { email }] }
        // })

        // Fetch user from database
        const user = await prismadb.user.findUnique({
            where: { username },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 400 })
        }

        // Check if current password matches
        const isMatch = await bcrypt.compare(currentPassword, user.password) // 'password' is coming from reqBody && 'user.password' from database

        // If the password is not valid
        if (!isMatch) {
            return NextResponse.json({ error: "Incorrect current password" }, { status: 403 })
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // // Update the user's password
        const updatedUser = await prismadb.user.update({
            where: { username },
            data: { password: hashedPassword },
        });

        if (updatedUser) {
            return NextResponse.json({ message: 'Password updated successfully', updatedUser:updatedUser }, { status: 200 })
        } else {
            return NextResponse.json({ message: 'Password updated failed' }, { status: 500 })
        }

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
