
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth";

export async function GET(
    request: Request,
    { params }: { params: { aboutmeId: string } }
) {
    try {
        if (!params.aboutmeId) {
            return new NextResponse("AboutMe id is required", { status: 400 });
        }

        const aboutMe = await prismadb.aboutMe.findUnique({
            where: {
                id: params.aboutmeId
            }
        });

        return NextResponse.json(aboutMe);
    } catch (error) {
        console.log('[ABOUTME_ID_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    context: { params: { aboutmeId: string } }
) {
    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { aboutmeId } = context.params

        if (!aboutmeId) {
            return new NextResponse("AboutMe id is required", { status: 400 });
        }

        try {
            const aboutMe = await prismadb.aboutMe.delete({
                where: {
                    id: aboutmeId,
                }
            });

            return NextResponse.json(aboutMe);
        } catch (error) {
            console.log('[ABOUTME_DELETE]', error);
            return new NextResponse("Internal error", { status: 500 });
        }
    })(request, context) as any;
}

export async function PATCH(
    request: NextRequest,
    context: { params: { aboutmeId: string } }
) {
    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { aboutmeId } = context.params

        if (!aboutmeId) {
            return new NextResponse("AboutMe id is required", { status: 400 });
        }

        const reqBody = await request.json()
        const {
            name,
            location,
            bio,
            aboutMeHeader,
            aboutMeDescription,
            schools,
            collages,
            overview,
            overviewHeader,
            learningJourney,
            learningJourneyHeader,
            linkedinUrl,
            githubUrl,
            whatsappUrl,
            instagramUrl,
            facebookUrl,
            primaryGmail,
            secondaryGmail,
            mobileNumber,
            anonymousMessageUrl,
        } = reqBody

        try {
            const aboutMe = await prismadb.aboutMe.update({
                where: {
                    id: aboutmeId,
                },
                data: {
                    name,
                    location,
                    bio,
                    aboutMeHeader,
                    aboutMeDescription,
                    schools,
                    collages,
                    overview,
                    overviewHeader,
                    learningJourney,
                    learningJourneyHeader,
                    linkedinUrl,
                    githubUrl,
                    whatsappUrl,
                    instagramUrl,
                    facebookUrl,
                    primaryGmail,
                    secondaryGmail,
                    mobileNumber,
                    anonymousMessageUrl,
                }
            });

            return NextResponse.json(aboutMe);
        } catch (error) {
            console.log('[ABOUTME_PATCH]', error);
            return new NextResponse("Internal error", { status: 500 });
        }
    })(request, context) as any;
}
