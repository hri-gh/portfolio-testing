"use client"

import React from 'react'

// import useQuery from '@/hooks/use-query';
import { usePublicProfiles } from '@/hooks/get-public-profile';

import PublicProfileCard from './public-profile-card';
import PublicProfileSkeleton from './public-profile-skeleton';
import { PublicProfile } from '@prisma/client';

export const PublicProfileListList = ({ data }: { data: PublicProfile[] }) => {

    // const [data, error, loading] = usePublicProfiles()
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {/* {loading && (<PublicProfileSkeleton />)} */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* {loading && (
                    skeletons.map((skeleton, index) => (
                        <PublicProfileSkeleton key={index} />
                    ))
                )} */}
                {/* {error && (<p>{error}</p>)} */}
                {data.map((item: any) => (
                    <PublicProfileCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}
