import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth";

export async function GET(
    request: NextRequest,
    { params }: { params: { projectId: string } }
) {
    try {
        if (!params.projectId) {
            return new NextResponse("Project id is required", { status: 400 });
        }

        const project = await prismadb.project.findUnique({
            where: {
                id: params.projectId
            },
            include: {
                images: true
            }
        });

        return NextResponse.json(project);
    } catch (error) {
        console.log('[PROJECT_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    context: { params: { projectId: string } }
) {
    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { projectId } = context.params;

        try {
            if (!projectId) {
                return new NextResponse("Project id is required", { status: 400 });
            }

            const project = await prismadb.project.delete({
                where: {
                    id: projectId,
                }
            });

            return NextResponse.json(project);
        } catch (error) {
            console.log('[PROJECT_DELETE]', error);
            return new NextResponse("Internal error", { status: 500 });
        }
    })(request, context) as any;
}


export async function PATCH(
    request: NextRequest,
    context: { params: { projectId: string } }
) {

    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { projectId } = context.params;

        if (!projectId) {
            return new NextResponse("Project id is required", { status: 400 });
        }

        const reqBody = await request.json()
        const {
            images,
            projectName,
            technologies,
            aboutProject,
            liveDemoLink,
            websiteLink,
            githubLink,
            gitlabLink,
            bitbucketLink,
            projectType,
        } = reqBody

        try {
            await prismadb.project.update({
                where: {
                    id: projectId,
                },
                data: {
                    images: {
                        deleteMany: {},
                    },
                    projectName,
                    technologies,
                    aboutProject,
                    liveDemoLink,
                    websiteLink,
                    githubLink,
                    gitlabLink,
                    bitbucketLink,
                    projectType,
                }
            });

            const project = await prismadb.project.update({
                where: {
                    id: projectId,
                },
                data: {
                    images: {
                        createMany: {
                            data: [
                                ...images.map((image: { url: string }) => image)
                            ]
                        }
                    }
                }
            })

            return NextResponse.json(project);
        } catch (error) {
            console.log('[PROJECT_PATCH]', error);
            return new NextResponse("Internal error", { status: 500 });
        }
    })(request, context) as any;
}
