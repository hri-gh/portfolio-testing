import prismadb from "@/lib/prismadb";

import { SkillForm } from './components/skill-form'

const SkillPage = async ({
    params
}: {
    params: { skillId: string }
}
) => {

    const skill = await prismadb.skill.findUnique({
        where: {
            id: params.skillId
        },
    })

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SkillForm initialData={skill} />
            </div>
        </div>
    )
}

export default SkillPage
