import { getDataFromToken } from "@/helpers/get-data-from-token";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth";

export async function GET(
    request: Request,
    { params }: { params: { certificateId: string } }
) {
    try {
        if (!params.certificateId) {
            return new NextResponse("Certificate id is required", { status: 400 });
        }

        const certificate = await prismadb.certificate.findUnique({
            where: {
                id: params.certificateId
            }
        });

        return NextResponse.json(certificate);
    } catch (error) {
        console.log('[CERTIFICATE_ID_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};


export async function DELETE(
    request: NextRequest,
    context: { params: { certificateId: string } }
) {
    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { certificateId } = context.params

        if (!certificateId) {
            return new NextResponse("Certificate id is required", { status: 400 });
        }

        try {
            const certificate = await prismadb.certificate.delete({
                where: {
                    id: certificateId,
                }
            });

            return NextResponse.json(certificate);
        } catch (error) {
            console.log('[CERTIFICATE_DELETE]', error);
            return new NextResponse("Internal error", { status: 500 });
        }
    })(request, context) as any;
}

export async function PATCH(
    request: NextRequest,
    context: { params: { certificateId: string } }
) {

    return auth(async (req) => {
        if (!req.auth) {
            return new NextResponse("Not authenticated", { status: 401 });
        }

        const { certificateId } = context.params
        const reqBody = await request.json()
        const { provider, title, imageUrl, providerLogoUrl } = reqBody

        if (!certificateId) {
            return new NextResponse("Certificate id is required", { status: 400 });
        }

        try {
            const certificate = await prismadb.certificate.update({
                where: {
                    id: certificateId,
                },
                data: {
                    provider,
                    title,
                    imageUrl,
                    providerLogoUrl,
                }
            });

            return NextResponse.json(certificate);
        } catch (error) {
            console.log('[CERTIFICATE_PATCH]', error);
            return new NextResponse("Internal error", { status: 500 });
        }
    })(request, context) as any;
}
