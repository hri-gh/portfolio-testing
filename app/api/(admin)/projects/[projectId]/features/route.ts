import { NextRequest, NextResponse } from "next/server"
import prismadb from "@/lib/prismadb";
import { getDataFromToken } from "@/helpers/get-data-from-token";
import { auth } from "@/auth";

export async function POST(
    request: NextRequest,
    context: { params: { projectId: string } }
) {
    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { projectId } = context.params

        if (!projectId) {
            return new NextResponse("Project Id id is required", { status: 400 });
        }

        const reqBody = await request.json()
        const { featureTitle, featureDescription, featureImage, featureVideo } = reqBody

        try {

            const feature = await prismadb.projectFeature.create({
                data: {
                    projectId: projectId,
                    featureTitle,
                    featureDescription,
                    featureImage,
                    featureVideo
                },

            })

            return NextResponse.json(feature)
        } catch (error) {
            console.log('[PROJECT_FEATURES_POST]', error);
            return new NextResponse("Internal error", { status: 500 })
        }
    })(request, context) as any;
}


export async function GET(
    request: NextRequest,
    { params }: { params: { projectId: string } }
) {
    const { projectId } = params
    try {
        const features = await prismadb.projectFeature.findMany(
            {
                where: {
                    projectId: projectId
                }
            }
        );
        return NextResponse.json(features);
    } catch (error) {
        console.log('[PROJECT_FEATURES_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
