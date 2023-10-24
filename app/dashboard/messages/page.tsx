import { MessagesTable } from '@/components/MessagesTable'
import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=' mx-auto container'>
        <div className='flex py-8 justify-between items-end'>
            <h1 className='text-5xl'>Messages</h1>
        </div>
        <MessagesTable/>

    </div>
  )
}

export default page