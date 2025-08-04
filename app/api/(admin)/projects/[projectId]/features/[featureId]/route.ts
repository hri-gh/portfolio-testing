import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth";

export async function GET(
    request: NextRequest,
    { params }: { params: { projectId: string, featureId: string } }
) {
    const { projectId, featureId } = params

    const userId = await getDataFromToken(request)
    const user = await prismadb.user.findFirst({ where: { id: userId } })

    if (!user) {
        return new NextResponse("Unauthorized", { status: 405 })
    }

    try {
        if (!projectId) {
            return new NextResponse("Project id is required", { status: 400 });
        }

        if (!featureId) {
            return new NextResponse("Feature id is required", { status: 400 });
        }

        const feature = await prismadb.projectFeature.findUnique({
            where: {
                id: featureId
            },
        });

        return NextResponse.json(feature);
    } catch (error) {
        console.log('[PROJECT_FEATURE_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}


export async function DELETE(
    request: NextRequest,
    context: { params: { projectId: string, featureId: string } }
) {
    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { projectId, featureId } = context.params

        try {
            if (!projectId) {
                return new NextResponse("Project id is required", { status: 400 });
            }

            if (!featureId) {
                return new NextResponse("Feature id is required", { status: 400 });
            }

            const feature = await prismadb.projectFeature.delete({
                where: {
                    id: featureId,
                }
            });

            return NextResponse.json(feature);
        } catch (error) {
            console.log('[PROJECT_FEATURE_DELETE]', error);
            return new NextResponse("Internal error", { status: 500 });
        }
    })(request, context) as any;
}


export async function PATCH(
    request: NextRequest,
    context: { params: { projectId: string, featureId: string } }
) {
    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const reqBody = await request.json()
        const { projectId, featureId } = context.params
        const { featureTitle, featureDescription, featureImage, featureVideo } = reqBody

        try {
            if (!projectId) {
                return new NextResponse("Project id is required", { status: 400 });
            }

            if (!featureId) {
                return new NextResponse("Feature id is required", { status: 400 });
            }

            const feature = await prismadb.projectFeature.update({
                where: {
                    id: featureId,
                },
                data: {
                    featureTitle,
                    featureDescription,
                    featureImage,
                    featureVideo
                },

            })

            return NextResponse.json(feature)
        } catch (error) {
            console.log('[PROJECT_FEATURE_PATCH]', error);
            return new NextResponse("Internal error", { status: 500 })
        }
    })(request, context) as any
}
