import { ProjectsList } from "@/components/public/projects/project-list"
import { fetchProjects } from "@/lib/services/fetch-projects"

const ProjectsPage = async () => {
  const projects = await fetchProjects()

  return (
    <>
      <ProjectsList data={projects} />
    </>
  )
}

export default ProjectsPage
