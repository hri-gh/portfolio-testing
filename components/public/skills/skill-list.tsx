// "use client"

import { Skill } from "./skill"
// import { useSkills } from "@/hooks/get-skills"
// import SkillSkeleton from "./skill-skeleton"
import { fetchSkills } from "@/lib/services/fetch-skills"

export const SkillList = async() => {

    // const [data, error, loading] = useSkills();
    const data = await fetchSkills()
    return (
        <>
            <div className=" flex flex-wrap justify-center">
                {/* {loading && (<SkillSkeleton/>)} */}
                {/* {error && (<p>{error}</p>)} */}

                {data.map((item: any) => (
                    <Skill key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}

