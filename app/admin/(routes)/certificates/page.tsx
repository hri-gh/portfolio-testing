
import { format } from "date-fns";
import React from 'react'

import prismadb from '@/lib/prismadb'

import { CertificateClient } from "./components/client";
import { Certificate } from "@prisma/client";

export type CertificateCardData = {
  id: string;
  title: string;
  provider: string;
  image: string;
  providerLogo: string | null;
  updatedAt: string;
  createdAt: string;
}

const CertificatesPage = async () => {
  const res = await fetch(`${process.env.BASE_URL}/certificates`, { cache: 'no-cache' })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const certificates = await res.json();
  // const certificates = await prismadb.certificate.findMany()

  const formattedCertificates: CertificateCardData[] = certificates.map((item: Certificate) => ({
    id: item.id,
    provider: item.provider,
    title: item.title,
    image: item.imageUrl,
    providerLogo: item.providerLogoUrl,
    updatedAt: format(item.updatedAt, 'MMMM do, yyyy'),
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))

  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <CertificateClient data={formattedCertificates} />
        </div>
      </div>
    </>
  )
}

export default CertificatesPage
