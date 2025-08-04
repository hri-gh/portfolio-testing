import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth";

export async function GET(
    request: Request,
    { params }: { params: { publicProfileId: string } }
) {
    try {
        if (!params.publicProfileId) {
            return new NextResponse("Public profile id is required", { status: 400 });
        }

        const publicProfile = await prismadb.publicProfile.findUnique({
            where: {
                id: params.publicProfileId
            }
        });

        return NextResponse.json(publicProfile);
    } catch (error) {
        console.log('[PUBLIC_PROFILE_ID_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    context: { params: { publicProfileId: string } }
) {
    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { publicProfileId } = context.params

        if (!publicProfileId) {
            return new NextResponse("Public profile id is required", { status: 400 });
        }

        try {
            const publicProfile = await prismadb.publicProfile.delete({
                where: {
                    id: publicProfileId,
                }
            });

            return NextResponse.json(publicProfile);
        } catch (error) {
            console.log('[PUBLIC_PROFILE_DELETE]', error);
            return new NextResponse("Internal error", { status: 500 });
        }

    })(request, context) as any;

}

export async function PATCH(
    request: NextRequest,
    context: { params: { publicProfileId: string } }
) {
    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { publicProfileId } = context.params

        if (!publicProfileId) {
            return new NextResponse("Public profile id is required", { status: 400 });
        }

        const reqBody = await request.json()
        const { publicProfileName, publicProfileLink, imageUrl } = reqBody

        try {

            const publicProfile = await prismadb.publicProfile.update({
                where: {
                    id: publicProfileId,
                },
                data: {
                    publicProfileName,
                    publicProfileLink,
                    imageUrl,
                }
            });

            return NextResponse.json(publicProfile);
        } catch (error) {
            console.log('[PUBLIC_PROFILE_PATCH]', error);
            return new NextResponse("Internal error", { status: 500 });
        }
    })(request, context) as any;
}
