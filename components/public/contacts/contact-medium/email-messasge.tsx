import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export const EmailMessasge = () => {
  return (
    <>
      {/* <div className='bg-gray-500 rounded-sm p-2 m-1'>Email...</div> */}
      {/* <div className='bg-gray-500 h-32 rounded-sm p-2 m-1'>Message...</div> */}
      <Input
      placeholder='Email...'
      className='bg-gray-600 my-2 '
      />
      <Textarea
        placeholder='Message...'
        className='bg-gray-500 h-32'
      />
      <Button variant="secondary" className='rounded-full my-2'>Send Message</Button>
    </>
  )
}


