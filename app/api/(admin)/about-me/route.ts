import { NextRequest, NextResponse } from "next/server"

import prismadb from "@/lib/prismadb";

import { auth } from "@/auth";

export const POST = auth(async function POST(req) {
    const reqBody = await req.json()
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

    if (req.auth) {
        try {
            const aboutMe = await prismadb.aboutMe.create({
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
            })

            return NextResponse.json(aboutMe)
        } catch (error) {
            console.log('[ABOUTME_POST]', error);
            return new NextResponse("Internal error", { status: 500 })
        }
    }


})


export async function GET(
    request: NextRequest,
) {
    try {
        const aboutMe = await prismadb.aboutMe.findMany();
        return NextResponse.json(aboutMe);
    } catch (error) {
        console.log('[ABOUTME_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
