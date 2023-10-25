"use client"

import CreateNewFolder from '@/components/CreateNewFolder'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { db } from '@/firebase'
import { Folder } from '@/types'
import { collection, getDocs } from 'firebase/firestore'
import { Folder as FolderIcon, MoreHorizontal, MoreVertical, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Page = (props: Props) => {

  const [folders, setFolders] = React.useState<Folder[]>([])

  React.useEffect(() => {
    const runit = async () => {
      const querySnapshot = await getDocs(collection(db, "folders"));
      let fs: Folder[] = []
      querySnapshot.forEach((doc) => {
        fs.push({
          id: doc.id,
          ...doc.data()
        }as Folder)
      });
      setFolders(fs)
    }
    return ()=>{
      runit()
    }
  },[])

  return (
    <div className=' mx-auto container'>
        <div className='flex py-8 justify-between items-end'>
            <h1 className='text-5xl'>Uploads</h1>
            <CreateNewFolder parent={""}/>
        </div>
        <Separator className='my-10'/>
        <div className='grid gap-4 grid-cols-3'>
            {
                folders.map((folder) => {
                    return (
                        <FolderComp folder={folder} key={folder.id}/>
                    )
                })
            }
        </div>
    </div>
  )
}

const FolderComp = ({folder}:{folder: Folder}) => {
    const handleButtonClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the link from navigating
        // Add your button click logic here
      };
    return(
            <Link href={"/dashboard/uploads/folder"} className='bg-[#fafaf8]  p-4 border shadow-sm rounded-xl flex gap-4 items-center'>
                <FolderIcon className='text-primary' size={50} strokeWidth={1}/>
                <Separator orientation='vertical' />
                <div className='flex-1'>
                    <h3 className='text-lg'>{folder.name}</h3>
                    <p className='text-muted-foreground'>1 images</p>
                </div>
                <Button onClick={handleButtonClick} variant={"ghost"} className='text-primary' size={"icon"}><MoreVertical size={20}/></Button>
            </Link>
    )
}

export default Page