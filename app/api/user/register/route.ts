import { NextResponse, NextRequest } from "next/server";
// import bcrypt from 'bcryptjs'
// import * as z from "zod";

// import prismadb from "@/lib/prismadb";
// import { RegisterSchema } from "@/schemas";


export async function POST(request: NextRequest) {
    try {
        // const reqBody: z.infer<typeof RegisterSchema> = await request.json()
        // const { username, email, password } = reqBody
        //console.log(email)

        // if (email === 'hrithikgh.edu@gmail.com') {

        // Check if users already exists
        // const existingUser = await prismadb.user.findFirst({
        //     where: { OR: [{ username }, { email }] }
        // })

        // if (existingUser) {
        //     return NextResponse.json({ error: "Credentials already in use" }, { status: 400 })
        // }

        // const hashedPassword = await bcrypt.hash(password, 10);

        // await prismadb.user.create({
        //     data: {
        //         username,
        //         email,
        //         password: hashedPassword,
        //     },
        // });

        // return NextResponse.json({
        //     message: "User created successfully",
        //     success: true,
        // })
        return NextResponse.json({ error: "You are not allowed" }, { status: 400 })
        // } else {
        // return NextResponse.json({ error: "You are not allowed" }, { status: 400 })
        // }

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
