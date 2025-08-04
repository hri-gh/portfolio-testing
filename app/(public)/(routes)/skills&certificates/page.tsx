import React from 'react'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


import SkillsPage from './(skills-page)/skills-page'
import CertificatesPage from './(certificates-page)/certificates-page'

const SkillsCertificatesPage = () => {

  return (
    <>
      <Tabs defaultValue="certificates" className=" p-5 rounded-md">

        <TabsList className=" grid w-full grid-cols-2 items-center h-10">
          <TabsTrigger value="certificates" className="hover:bg-gray-200">Certificates</TabsTrigger>
          <TabsTrigger value="skills" className="hover:bg-gray-200">Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="certificates">
          <CertificatesPage />
        </TabsContent>

        <TabsContent value="skills">
          <SkillsPage />
        </TabsContent>
      </Tabs>
    </>
  )
}

export default SkillsCertificatesPage
