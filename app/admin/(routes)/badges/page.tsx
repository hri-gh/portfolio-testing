import { format } from "date-fns";
import React, { cache } from 'react'

import { BadgeClient } from "./components/client";
import { Badge } from "@prisma/client";

export type BadgeCardData = {
  id: string;
  image: string;
  platformName: string;
  platformLink: string;
  updatedAt: string;
  createdAt: string;
}

const BadgesPage = async () => {
  const res = await fetch(`${process.env.BASE_URL}/badges`, { cache: 'no-cache' })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const badges = await res.json();
  // const badges = await prismadb.badge.findMany()


  const formattedBadges: BadgeCardData[] = badges.map((item: Badge) => ({
    id: item.id,
    image: item.imageUrl,
    platformName: item.platformName,
    platformLink: item.platformLink,
    updatedAt: format(item.updatedAt, 'MMMM do, yyyy'),
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))


  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <BadgeClient data={formattedBadges} />
        </div>
      </div>
    </>
  )
}

export default BadgesPage
