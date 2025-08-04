import React from 'react'
import { BadgeList } from '@/components/public/badges/badge-list'
import { fetchBadges } from '@/lib/services/fetch-badges'

const BadgesPage = async () => {
  const badges = await fetchBadges()

  return (
    <>
      <BadgeList data={badges} />
    </>
  )
}

export default BadgesPage
