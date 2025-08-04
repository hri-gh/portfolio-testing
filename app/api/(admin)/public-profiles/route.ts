import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth";

import prismadb from "@/lib/prismadb";

import { getDataFromToken } from "@/helpers/get-data-from-token";

export const POST = auth(async function POST(req) {
    const reqBody = await req.json()
    const { imageUrl, publicProfileLink, publicProfileName } = reqBody

    if (req.auth) {
        try {
            const publicProfile = await prismadb.publicProfile.create({
                data: {
                    imageUrl,
                    publicProfileName,
                    publicProfileLink
                }
            })

            return NextResponse.json(publicProfile)
        } catch (error) {
            console.log('[PUBLIC_PROFILE_POST]', error);
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
        const publicProfiles = await prismadb.publicProfile.findMany();
        return NextResponse.json(publicProfiles);
    } catch (error) {
        console.log('[PUBLIC_PROFILES_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
