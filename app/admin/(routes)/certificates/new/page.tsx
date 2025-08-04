import React from 'react'

import { CertificateForm } from '../[certificateId]/components/certificate-form'

const AddNewCertificate = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CertificateForm initialData={null} />
            </div>
        </div>
    )
}

export default AddNewCertificate
