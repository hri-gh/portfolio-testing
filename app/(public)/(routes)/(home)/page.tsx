import React from 'react'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import OverviewPage from './(overview-page)/overview-page'
import ResumePage from './(resume-page)/resume-page'

const Home = () => {

  return (
    <>
      <Tabs defaultValue="overview" className="bg-yellow-500 p-5 rounded-md">

        <TabsList className=" grid w-full grid-cols-2 items-center h-10">
          <TabsTrigger value="overview" className="hover:bg-gray-200">Overview</TabsTrigger>
          <TabsTrigger value="resume" className="hover:bg-gray-200">Reusme</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewPage />
        </TabsContent>

        <TabsContent value="resume">
          <ResumePage />
        </TabsContent>
      </Tabs>
    </>
  )
}

export default Home
