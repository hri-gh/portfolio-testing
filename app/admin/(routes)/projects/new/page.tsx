import React from 'react'

import { ProjectForm } from '../[projectId]/components/project-form'

const AddNewProject = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProjectForm initialData={null} />
            </div>
        </div>
    )
}

export default AddNewProject
