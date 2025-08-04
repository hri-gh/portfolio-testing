import React from 'react'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


import PublicProfilesPage from './(public-profiles-page)/public-profiles-page'
import BadgesPage from './(badges)/badges-page'

const PublicProfilesAndBadgesPage = () => {

  return (
    <>
      <Tabs defaultValue="public-profiles" className=" p-5 rounded-md">

        <TabsList className=" grid w-full grid-cols-2 items-center h-10">
          <TabsTrigger value="public-profiles" className="hover:bg-gray-200">Public Profiles</TabsTrigger>
          <TabsTrigger value="badges" className="hover:bg-gray-200">Badges</TabsTrigger>
        </TabsList>

        <TabsContent value="public-profiles">
          <PublicProfilesPage />
        </TabsContent>

        <TabsContent value="badges">
          <BadgesPage />
        </TabsContent>
      </Tabs>
    </>
  )
}

export default PublicProfilesAndBadgesPage
