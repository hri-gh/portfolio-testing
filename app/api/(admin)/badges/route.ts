import { NextRequest, NextResponse } from "next/server"

import prismadb from "@/lib/prismadb";

import { auth } from "@/auth";

export const POST = auth(async function POST(req) {
    const reqBody = await req.json()
    const { imageUrl, platformName, platformLink } = reqBody

    if (req.auth) {
        try {
            const badge = await prismadb.badge.create({
                data: {
                    imageUrl,
                    platformName,
                    platformLink,
                }
            })

            return NextResponse.json(badge)
        } catch (error) {
            console.log('[BADGE_POST]', error);
            return new NextResponse("Internal error", { status: 500 })
        }
    } else {
        return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }


})


export async function GET(
    request: NextRequest,
) {
    try {
        const badges = await prismadb.badge.findMany();
        return NextResponse.json(badges);
    } catch (error) {
        console.log('[BADGES_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
