import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth";

export async function GET(
    request: Request,
    { params }: { params: { skillId: string } }
) {
    try {
        if (!params.skillId) {
            return new NextResponse("Skill id is required", { status: 400 });
        }

        const skill = await prismadb.skill.findUnique({
            where: {
                id: params.skillId
            }
        });

        return NextResponse.json(skill);
    } catch (error) {
        console.log('[SKILL_ID_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    context: { params: { skillId: string } }
) {
    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { skillId } = context.params;

        if (!skillId) {
            return new NextResponse("Skill id is required", { status: 400 });
        }

        try {
            const skill = await prismadb.skill.delete({
                where: {
                    id: skillId,
                }
            });

            return NextResponse.json(skill);
        } catch (error) {
            console.error("[SKILL_DELETE]", error);
            return new NextResponse("Internal error", { status: 500 });
        }
    })(request, context) as any;
}

export async function PATCH(
    request: NextRequest,
    context: { params: { skillId: string } }
) {
    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { skillId } = context.params
        const reqBody = await request.json()
        const { name, imageUrl } = reqBody

        if (!skillId) {
            return new NextResponse("Skill id is required", { status: 400 });
        }

        try {
            const skill = await prismadb.skill.update({
                where: {
                    id: skillId,
                },
                data: {
                    name,
                    imageUrl
                }
            });

            return NextResponse.json(skill);
        } catch (error) {
            console.log('[SKILL_PATCH]', error);
            return new NextResponse("Internal error", { status: 500 });
        }
    })(request, context) as any
}
