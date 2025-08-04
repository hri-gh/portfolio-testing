import React from 'react'
import { PublicProfileListList } from '@/components/public/public-profiles/public-profile-list'
import { fetchPublicProfiles } from '@/lib/services/fetch-public-profiles'

const PublicProfilesPage = async () => {
  const publicProfiles = await fetchPublicProfiles()
  return (
    <>
      <PublicProfileListList data={publicProfiles} />
    </>
  )
}

export default PublicProfilesPage
