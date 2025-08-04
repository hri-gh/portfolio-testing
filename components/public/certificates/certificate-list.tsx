"use client"

import React, { useState } from 'react'
import { useCertificates } from '@/hooks/get-certificates';
import { Certificate } from './certificate';
import { BentoGrid } from '@/components/custom-ui/bento-grid';
import CertificateCardSkeleton from './certificate-card-skeleton';
import { Certificate as CertificateTypes } from '@prisma/client';


export const CertificateList = ({data}:{data:CertificateTypes[]}) => {

    // const [data, error, loading] = useCertificates()
    const skeletons = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {/* {loading && (
                // grid lg:grid-cols-3 md:grid-cols-1  gap-4
                <div className="lg:flex lg:flex-wrap lg:justify-between mx-auto max-w-4xl ">
                    {skeletons.map((skeleton: any) => (
                        <CertificateCardSkeleton key={skeleton} />

                    ))}
                </div>
            )} */}
            <BentoGrid className='max-w-4xl mx-auto'>
                {data.map((item: any) => (
                    <Certificate key={item.id} item={item} />
                ))}
            </BentoGrid>
        </>
    )
}
