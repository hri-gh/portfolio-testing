"use client"
"use client"

import React, { useEffect } from 'react'
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/ui/heading";

import { AddFeatureForm } from './add-feature-form'
import FeatureCard from './feature-card'
import { ProjectFeature as Feature } from '@prisma/client';
import { useFeatureStore } from '@/store/project-feature-store';
import FeatureList from './feature-list';

interface Props {
  data: Feature[]
}


const FeatureClient: React.FC<Props> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  const { setFeatures, features } = useFeatureStore()

  useEffect(() => {
    setFeatures(data)
  }, [data, setFeatures])

  const formattedFeatures: Feature[] = features.map((item: Feature) => ({
    id: item.id,
    featureDescription: item.featureDescription,
    featureTitle: item.featureTitle,
    projectId: item.projectId,
    featureImage: item.featureImage,
    featureVideo: item.featureVideo,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }))


  return (
    <>
      <AddFeatureForm />
      <Separator className='my-3'/>
      <div className="mb-1 mx-4 flex items-center justify-between">
        <Heading
            title={`Features (${data.length})`}
            description=""
        />
      </div>
      <FeatureList features={formattedFeatures}/>
    </>
  )
}

export default FeatureClient
