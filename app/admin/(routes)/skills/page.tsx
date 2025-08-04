
import { format } from "date-fns";
import React from 'react'

// import prismadb from '@/lib/prismadb'

import { SkillClient } from "./components/client";
import { Skill } from "@prisma/client";

export type SkillCardData = {
  id: string;
  name: string;
  image: string;
  updatedAt: string;
  createdAt: string;
}

const SkillsPage = async () => {
  const res = await fetch(`${process.env.BASE_URL}/skills`, { cache: 'no-cache' })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const skills = await res.json();

  // const skills = await prismadb.skill.findMany()

  const formattedSkills: SkillCardData[] = skills.map((item: Skill) => ({
    id: item.id,
    name: item.name,
    image: item.imageUrl,
    updatedAt: format(item.updatedAt, 'MMMM do, yyyy'),
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))

  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <SkillClient data={formattedSkills} />
        </div>
      </div>
    </>
  )
}

export default SkillsPage
