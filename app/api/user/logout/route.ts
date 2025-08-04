import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET() {
    try {

        const response = NextResponse.json(
            {
                message: "Logout successful",
                success: true
            }
        )

        response.cookies.set("token", "", { secure: true, httpOnly: true, expires: new Date(0) })
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
