import React from 'react'
import ProjectDetailsPage from './components/project-details'
import ProjectDetailsTwo from './components/project-details-two'

const Project = ({ params }: { params: { projectId: string } }) => {
  return (
    <>
      Project : {params.projectId}
      {/* <ProjectDetailsPage/> */}
      <ProjectDetailsTwo/>
    </>
  )
}

export default Project
