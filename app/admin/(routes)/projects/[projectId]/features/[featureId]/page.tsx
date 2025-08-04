import React from 'react'
import prismadb from "@/lib/prismadb";
import FeatureEditForm from './components/feature-edit-form';

const FeaturePage = async ({
    params
}: {
    params: { featureId: string }
}) => {
    const { featureId } = params

    const feature = await prismadb.projectFeature.findUnique({
        where: {
            id: featureId
        },
    })

    if (!feature) {
        // You can render a different component or message here
        return <div>Feature not found</div>
    }

    return (
        <>
            <div className="flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <FeatureEditForm feature={feature} />
                </div>
            </div>
        </>
    )
}

export default FeaturePage
