import React from 'react'

import { SkillForm } from '../[skillId]/components/skill-form'

const AddNewProject = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SkillForm initialData={null} />
            </div>
        </div>
    )
}

export default AddNewProject
