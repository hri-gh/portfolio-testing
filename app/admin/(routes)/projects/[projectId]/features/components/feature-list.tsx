import React from 'react'
import { ProjectFeature as Feature } from '@prisma/client';
import FeatureCard from './feature-card';

interface Props {
    features: Feature[]
}

const FeatureList: React.FC<Props> = ({ features }) => {
    return (
        <>
        <div className='flex flex-wrap gap-2 mx-4'>
            {features.map((item) => (
                <FeatureCard key={item.id} feature={item} />
            ))}
        </div>
        </>
    )
}

export default FeatureList
