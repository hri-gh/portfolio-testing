import prismadb from "@/lib/prismadb";

import { CertificateForm } from './components/certificate-form'

const CertificatePage = async ({
    params
}: {
    params: { certificateId: string }
}
) => {

    const certificate = await prismadb.certificate.findUnique({
        where: {
            id: params.certificateId
        },
    })

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CertificateForm initialData={certificate} />
            </div>
        </div>
    )
}

export default CertificatePage
