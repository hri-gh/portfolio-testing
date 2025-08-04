import React from 'react'

import { PublicProfileForm } from '../[publicProfileId]/components/public-profile-form'

const AddNewPublicProfile = () => {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <PublicProfileForm initialData={null} />
            </div>
        </div>
    )
}

export default AddNewPublicProfile
