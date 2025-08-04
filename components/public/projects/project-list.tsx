"use client"

import React from 'react'

// import useQuery from '@/hooks/use-query';
import { useProjects } from '@/hooks/get-projects';

import ProjectCard from '@/components/public/projects/project-card';
import ProjectCardSkeleton from './project-card-skeleton';
import { Project } from '@prisma/client';

export const ProjectsList = ({data}:{data:Project[]}) => {

    // const [data, error, loading] = useProjects()

    const tech = data.map((item: any) => item.technologies.split(','))
    // console.log('PROJECT-LIST.TSX::',data);
    // const arr = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {/* {loading && (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {arr.map((item: any) => (
                        <ProjectCardSkeleton key={item} />
                    ))}
                </div>
            )} */}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* {error && (<p>{error}</p>)} */}
                {data.map((item: any) => (
                    <>
                        <ProjectCard key={item.id} item={item} />
                    </>
                ))}
            </div>
        </>
    )
}
