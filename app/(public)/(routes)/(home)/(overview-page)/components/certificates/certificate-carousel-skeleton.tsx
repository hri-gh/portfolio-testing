import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const CertificateSkeleton = () => {
  return (
    <div className="flex gap-2">
      <Skeleton className='h-[200px] w-[400px] rounded-xl ' />
      <Skeleton className='h-[200px] w-[400px] rounded-xl ' />
      <Skeleton className='h-[200px] w-[400px] rounded-xl ' />
    </div>
  )
}

export default CertificateSkeleton
