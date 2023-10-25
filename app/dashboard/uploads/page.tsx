"use client"

import CreateNewFolder from '@/components/CreateNewFolder'
import FolderComp from '@/components/FolderComp'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { db } from '@/firebase'
import { Folder } from '@/types'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { Folder as FolderIcon, MoreHorizontal, MoreVertical, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Page = (props: Props) => {

  const [folders, setFolders] = React.useState<Folder[]>([])

  React.useEffect(() => {
    const runit = async () => {
      const q = query(collection(db, "folders"), where("parent", "==", ""));
      const querySnapshot = await getDocs(q);
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
        <h1 className='text-2xl'>Root folders</h1>
        <Separator className='my-10 mt-4'/>
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


export default Page