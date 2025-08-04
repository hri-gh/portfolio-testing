import React from 'react'
import { format } from "date-fns";

import FeatureClient from './components/client'

const ProjectFeatures = async ({
    params
}: {
    params: { projectId: string }
}) => {
    const { projectId } = params

    const res = await fetch(`${process.env.BASE_URL}/projects/${projectId}/features`, { cache: 'no-cache' })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    const features = await res.json()

    return (
        <>
            ProjectFeature : {projectId}
            <FeatureClient data={features}/>
        </>
    )
}

export default ProjectFeatures
