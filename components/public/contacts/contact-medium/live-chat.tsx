import React from 'react'
import { MessageSquareMore } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const LiveChat = () => {
  return (
    <>
      <Button className='my-auto gap-2'>
      <MessageSquareMore className='my-auto'/>
        <Link href="#">Chat with me</Link>
      </Button>
    </>
  )
}
