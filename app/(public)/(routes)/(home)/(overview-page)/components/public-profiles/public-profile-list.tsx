// "use client"

import React from 'react'

// import useQuery from '@/hooks/use-query';
import { usePublicProfiles } from '@/hooks/get-public-profile';

import PublicProfileCard from './public-profile-card';
// import { PublicProfileSkeleton } from './public-profile-skeleton';
import { PublicProfile } from '@prisma/client';

export const PublicProfileListList = ({ data }: { data: PublicProfile[] }) => {

    // const [data, error, loading] = usePublicProfiles()
    // const arr = [1, 2, 3, 4]

    return (
        <>
            <div className=''>
                {/* {loading && (arr.map((i) =>
                    <PublicProfileSkeleton key={i} />
                ))} */}
                {/* {error && (<p>{error}</p>)} */}
                {data.map((item: any) => (
                    <PublicProfileCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}
