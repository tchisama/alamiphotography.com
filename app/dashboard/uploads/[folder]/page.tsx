"use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Folder as FolderIcon, ImageIcon, MoreVertical, Plus, Upload } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { db } from '@/firebase'
import { Folder } from '@/types'
import { collection, getDocs, query, where } from 'firebase/firestore'
import FolderComp from '@/components/FolderComp'
import { useParams } from 'next/navigation'
import CreateNewFolder from '@/components/CreateNewFolder'

type Props = {
    param:{
        folder: string
    }
}

const Page = (props: Props) => {

    const params = useParams()


  const [folders, setFolders] = React.useState<Folder[]>([])

  React.useEffect(() => {
    const runit = async () => {
      const q = query(collection(db, "folders"), where("parent", "==", params.folder));
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
  },[params.folder])



  return (
    <div className='mx-auto container'>
        <div className='flex py-8 justify-between items-end'>
            <Link href={"/dashboard/uploads"} className='text-2xl flex gap-5 items-center'><ArrowLeft/>Uploads / folder name</Link>
            <div className='flex gap-2'>
                <Button className='px-4 py-2 flex gap-2 rounded-lg shadow-md'> <Upload size={20}/> Upload</Button>
                <CreateNewFolder parent={params.folder as string}/>
            </div>
        </div>
        <div className='flex gap-4 bg-[#00000005] justify-center border-dashed border-muted-forground w-full h-[200px] rounded-xl border-[2px] mb-4 items-center'>
            <ImageIcon  size={22}/>
            Upload
        </div>
        <Separator className='my-10'/>
        <h1 className='text-2xl mb-4'>Children Folders</h1>
        <div className='grid gap-4 grid-cols-3 '>
            {
                folders.length>0 &&
                folders.map((folder) => {
                    return (
                        <FolderComp folder={folder} key={folder.id}/>
                    )
                })
            }
            {
                !(folders.length>0) &&
                <h1>No children folders</h1>
            }
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


export default Page