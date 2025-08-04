"use client"

import React, { useState } from 'react'
import {EmailMessasge} from './contact-medium/email-messasge'
import { AnonymousMessage } from './contact-medium/anonymous-message'
import { LiveChat} from './contact-medium/live-chat'
import { Separator } from '@/components/ui/separator'


export const Contacts = () => {

  return (
    <>
        <EmailMessasge/>
        <Separator className='my-4'/>
        <div className='flex gap-3 justify-center flex-wrap'>
        <AnonymousMessage/>
        <Separator className='bg-white p-0.5 h-10 rounded-full hidden sm:block' orientation='vertical'/>
        <LiveChat/>
        </div>
    </>
  )
}
