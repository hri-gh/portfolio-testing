import { auth } from "@/auth";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { badgeId: string } }
) {
    try {
        if (!params.badgeId) {
            return new NextResponse("Badge id is required", { status: 400 });
        }

        const badge = await prismadb.badge.findUnique({
            where: {
                id: params.badgeId
            }
        });

        return NextResponse.json(badge);
    } catch (error) {
        console.log('[BADGE_ID_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    context: { params: { badgeId: string } }
) {
    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { badgeId } = context.params

        if (!badgeId) {
            return new NextResponse("Badge id is required", { status: 400 });
        }

        try {

            const badge = await prismadb.badge.delete({
                where: {
                    id: badgeId,
                }
            });

            return NextResponse.json(badge);
        } catch (error) {
            console.log('[BADGE_DELETE]', error);
            return new NextResponse("Internal error", { status: 500 });
        }
    })(request, context) as any;
}

export async function PATCH(
    request: NextRequest,
    context: { params: { badgeId: string } }
) {
    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { badgeId } = context.params

        if (!badgeId) {
            return new NextResponse("Badge id is required", { status: 400 });
        }

        const reqBody = await request.json()
        const { imageUrl, platformName, platformLink } = reqBody

        try {
            const badge = await prismadb.badge.update({
                where: {
                    id: badgeId,
                },
                data: {
                    imageUrl,
                    platformName,
                    platformLink,
                }
            });

            return NextResponse.json(badge);
        } catch (error) {
            console.log('[BADGE_PATCH]', error);
            return new NextResponse("Internal error", { status: 500 });
        }
    })(request, context) as any;

}
