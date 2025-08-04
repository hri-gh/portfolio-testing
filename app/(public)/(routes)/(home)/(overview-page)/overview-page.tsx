// "use client"
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"

import { Separator } from '@/components/ui/separator'
import { InfiniteCertificateMovingCards } from './components/infinite-moving-cards/infinite-certificate-moving-cards'

// import GridCard from './components/grid-card/grid-card'
import FirstGridLayout from './components/grid-layouts/first-grid-layout'
import SecondGridLayout from './components/grid-layouts/second-grid-layout'

import { OverviewHeader } from './components/overview-header/overview-header'

import { CertificaatesCarousel } from './components/certificates/certificates-carousel'
import { fetchABoutMe } from '@/lib/services/fetch-aboutme'
import { fetchCertificates } from '@/lib/services/fetch-certificates'

const OverviewPage = async () => {
  const data = await fetchABoutMe()

  const overview = data[0]?.overview
  const aboutMe = data[0]?.aboutMeDescription
  const learningJourney = data[0]?.learningJourney

  const certificates = await fetchCertificates()

  return (
    <>
      <div className=''>
        {/* Section One */}
        <OverviewHeader data={overview}/>

        {/* Section Two */}
        <FirstGridLayout aboutMe={aboutMe} learningJourney={learningJourney}/>

        {/* Section Three */}
        <CertificaatesCarousel data = {certificates}/>

        {/* Section Four */}
        <SecondGridLayout />
        {/* <InfiniteCertificateMovingCards /> */}
      </div>
    </>
  )
}

export default OverviewPage





// <div className='flex flex-row flex-wrap gap-2'>
//   <ScrollArea className="bg-gray-500 w-2/ rounded-md border p-4">
//     Jokester began sneaking into the castle in the middle of the night and leaving
//     jokes all over the place: under the kings pillow, in his soup, even in the
//     royal toilet. The king was furious, but he couldnt seem to stop Jokester. And
//     then, one day, the people of the kingdom discovered that the jokes left by
//     Jokester were so funny that they couldnt help but laugh. And once they
//     started laughing, they couldnt stop.
//   </ScrollArea>
//   <ScrollArea className="bg-gray-500  rounded-md border p-4">
//     <h1 className='text-4xl mb-2'>Heading</h1>
//     <Separator className='mb-2' />
//     Jokester began sneaking into the castle in the middle of the night and leaving
//     jokes all over the place: under the kings pillow, in his soup, even in the
//     royal toilet. The king was furious, but he couldnt seem to stop Jokester. And
//     then, one day, the people of the kingdom discovered that the jokes left by
//     Jokester were so funny that they couldnt help but laugh. And once they
//     started laughing, they couldnt stop.
//   </ScrollArea>
// </div>
