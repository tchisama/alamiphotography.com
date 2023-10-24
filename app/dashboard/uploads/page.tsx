"use client"

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Folder, MoreHorizontal, MoreVertical, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=' mx-auto container'>
        <div className='flex py-8 justify-between items-end'>
            <h1 className='text-5xl'>Uploads</h1>
            <Button className='px-4 py-2 flex gap-2 rounded-lg shadow-md'>New folder <Plus size={20}/></Button>
        </div>
        <Separator className='my-10'/>
        <div className='grid gap-4 grid-cols-3'>
            <FolderComp/>
            <FolderComp/>
            <FolderComp/>
            <FolderComp/>
        </div>
    </div>
  )
}

const FolderComp = () => {
    const handleButtonClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the link from navigating
        // Add your button click logic here
      };
    return(
            <Link href={"/dashboard/uploads/folder"} className='bg-[#fafaf8]  p-4 border shadow-sm rounded-xl flex gap-4 items-center'>
                <Folder className='text-primary' size={50} strokeWidth={1}/>
                <Separator orientation='vertical' />
                <div className='flex-1'>
                    <h3 className='text-lg'>Folder name</h3>
                    <p className='text-muted-foreground'>14 images</p>
                </div>
                <Button onClick={handleButtonClick} variant={"ghost"} className='text-primary' size={"icon"}><MoreVertical size={20}/></Button>
            </Link>
    )
}

export default page