import { NextRequest, NextResponse } from "next/server"
import prismadb from "@/lib/prismadb";
import { auth } from "@/auth";
import { getDataFromToken } from "@/helpers/get-data-from-token";

export const POST = auth(async function POST(req) {
    const reqBody = await req.json()
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

    if (req.auth) {
        try {
            const project = await prismadb.project.create({
                data: {
                    projectName,
                    aboutProject,
                    liveDemoLink,
                    websiteLink,
                    githubLink,
                    gitlabLink,
                    bitbucketLink,
                    projectType,
                    technologies,
                    images: {
                        createMany: {
                            data: [
                                ...images.map((image: { url: string }) => image)
                            ]
                        }
                    }
                }
            })

            return NextResponse.json(project)
        } catch (error) {
            console.log('[PROJECTS_POST]', error);
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
        const projects = await prismadb.project.findMany({
            include: {
                images: true
            }
        });
        return NextResponse.json(projects);
    } catch (error) {
        console.log('[PROJECTS_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
