"use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Folder, MoreVertical, Upload } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='mx-auto container'>
        <div className='flex py-8 justify-between items-end'>
            <Link href={"/dashboard/uploads"} className='text-2xl flex gap-5 items-center'><ArrowLeft/>folder name</Link>
            <Button className='px-4 py-2 flex gap-2 rounded-lg shadow-md'> <Upload size={20}/> Upload</Button>
        </div>
        <div className='flex gap-4 justify-center border-dashed border-muted-forground w-full h-[200px] rounded-xl border-[2px] mb-4 items-center'>
            <Upload size={40}/>
            Upload
        </div>
        <Separator className='my-10'/>
        <h1 className='text-2xl mb-4'>Children Folders</h1>
        <div className='grid gap-4 grid-cols-3 '>
            <FolderComp/>
            <FolderComp/>
        </div>
        <Separator className='my-10'/>
        <h1 className='text-2xl mb-4'>Images</h1>
        <div className='grid gap-4 grid-cols-3 '>
            <ImageComp src={"https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Faye-Evan-270-596x894.jpg?x15971"}/>
            <ImageComp src={"https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Screen-Shot-2023-03-15-at-16.49.15-600x657.png?x15971"}/>
            <ImageComp src={"https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Confetti-1st-Edits-33-597x894.jpeg?x15971"}/>
            <ImageComp src={"https://www.niallscullyphotography.com/wp-content/uploads/2019/04/Cliffs-18-of-105.jpg"}/>
        </div>
    </div>
  )
}


const ImageComp = ({src}:{src:string}) => {
    return (
            <div className='bg-[#fafaf8]  aspect-square border shadow-sm rounded-xl'>
                <img className='w-full h-full object-contain' src={src} alt=""/>
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