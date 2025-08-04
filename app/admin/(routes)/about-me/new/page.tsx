import React from 'react'

import { AboutmeForm } from '../[aboutmeId]/components/aboutMe-form'

const AddNewOverview = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <AboutmeForm initialData={null} />
            </div>
        </div>
    )
}

export default AddNewOverview
