import React from 'react'
import { CertificateList } from '@/components/public/certificates/certificate-list'
import { fetchCertificates } from '@/lib/services/fetch-certificates'

const CertificatesPage = async () => {
  const certificates = await fetchCertificates()

  return (
    <>
      <CertificateList data={certificates}/>
    </>
  )
}

export default CertificatesPage
