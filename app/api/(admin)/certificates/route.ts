import { NextRequest, NextResponse } from "next/server"
import prismadb from "@/lib/prismadb";
import { getDataFromToken } from "@/helpers/get-data-from-token";
import { auth } from "@/auth";

export const POST = auth(async function POST(req) {
    const reqBody = await req.json()
    const { provider, title, imageUrl, providerLogoUrl } = reqBody

    if (req.auth) {
        try {
            const certificate = await prismadb.certificate.create({
                data: {
                    provider,
                    title,
                    imageUrl,
                    providerLogoUrl,

                }
            })

            return NextResponse.json(certificate)
        } catch (error) {
            console.log('[CERTIFICATE_POST]', error);
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
        const certificates = await prismadb.certificate.findMany();
        return NextResponse.json(certificates);
    } catch (error) {
        console.log('[CERTIFICATES_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
