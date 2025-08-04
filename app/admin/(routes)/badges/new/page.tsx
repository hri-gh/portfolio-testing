import React from 'react'

import { BadgeForm } from '../[badgeId]/components/badge-form'

const AddNewPublicProfile = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BadgeForm initialData={null} />
            </div>
        </div>
    )
}

export default AddNewPublicProfile
