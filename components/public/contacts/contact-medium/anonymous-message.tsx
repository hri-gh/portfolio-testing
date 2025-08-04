import React from 'react'

import { MessageCircleQuestion} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const AnonymousMessage = () => {
    return (
        <>
         <Button className='my-auto gap-2 '>
            <MessageCircleQuestion className='my-auto'/>
            <Link href="#">Anonymous Message</Link>
         </Button>
        </>
    )
}


