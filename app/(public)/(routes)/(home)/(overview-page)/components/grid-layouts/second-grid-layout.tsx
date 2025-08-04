
import { Separator } from "@/components/ui/separator"
import { BadgesCarousel } from "../badges/badges-carousel"
import { ProjectsCarousel } from "../projects/projects-carousel"
import { fetchBadges } from "@/lib/services/fetch-badges"
import { fetchProjects } from "@/lib/services/fetch-projects"

export default async function SecondGridLayout() {
    const badges = await fetchBadges()
    const projects = await fetchProjects()

    return (
        <div className="grid p-4 mt-2 bg-gray-200 dark:bg-black rounded-xl md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 items-start">
            {/* COMPONENT-1 */}
            <BadgesCarousel data={badges}/>

            {/* COMPONENT-2 */}
            <ProjectsCarousel data={projects}/>

            {/* COMPONENT-3 */}


            {/* COMPONENT-4 */}

        </div>
    )
}

