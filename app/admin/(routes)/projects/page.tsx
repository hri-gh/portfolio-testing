
import { format } from "date-fns";
import React from 'react'

// import prismadb from '@/lib/prismadb'
import { Image } from "@prisma/client";
import { ProjectClient } from "./components/client";

import { Project } from "@prisma/client";
export type ProjectCardData = {
  id: string;
  projectName: string;
  technologies: string;
  aboutProject: string;
  liveDemoLink: string | null;
  githubLink: string;
  updatedAt: string;
  createdAt: string;
}

const ProjectsPage = async () => {
  const res = await fetch(`${process.env.BASE_URL}/projects`, { cache: 'no-cache' })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const projects = await res.json()

  // const projects = await prismadb.project.findMany({
  //   include: {
  //     images: true
  //   }
  // })


  const formattedProject: ProjectCardData[] = projects.map((item: any) => ({
    id: item.id,
    projectName: item.projectName,
    technologies: item.technologies,
    aboutProject: item.aboutProject,
    liveDemoLink: item.liveDemoLink,
    githubLink: item.githubLink,
    image: item.images[0],
    updatedAt: format(item.updatedAt, 'MMMM do, yyyy'),
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))


  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <ProjectClient data={formattedProject} />
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
