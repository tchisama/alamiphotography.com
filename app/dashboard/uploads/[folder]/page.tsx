"use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Folder as FolderIcon, ImageIcon, MoreVertical, Plus, Upload } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { db, storage } from '@/firebase'
import { Folder, Photo } from '@/types'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import FolderComp from '@/components/FolderComp'
import { useParams } from 'next/navigation'
import CreateNewFolder from '@/components/CreateNewFolder'
import Loading from '@/components/Loading'
import { Input } from 'postcss'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import UploadImage from '@/components/UploadImage'

type Props = {
    param:{
        folder: string
    }
}

const Page = (props: Props) => {

    const params = useParams()


    const [folders, setFolders] = React.useState<Folder[]>([])
    const [photos, setPhotos] = React.useState<Photo[]>([])
    const [folder, setFolder] = React.useState<Folder>()
    const [loading, setLoading] = React.useState(true)

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

      const q2 = query(collection(db, "photos"), where("parent", "==", params.folder));
      const querySnapshot2 = await getDocs(q2);
      let phts: Photo[] = []
      querySnapshot2.forEach((doc) => {
        phts.push({
          id: doc.id,
          ...doc.data()
        }as Photo)
      });
      setPhotos(phts)

      const docRef = doc(db, "folders", params.folder as string);
      const docSnap = await getDoc(docRef);
      setFolder({...docSnap.data(),id:params.folder} as Folder)
      setLoading(false)
    }
    return ()=>{
      runit()
    }
  },[params.folder])



  if(loading){
      return(
        <Loading/>
      )
  }

  return (
    <div className='mx-auto container'>
        <div className='flex py-8 justify-between items-end'>
            <Link href={"/dashboard/uploads/"+folder?.parent} className='text-2xl flex gap-5 items-center'><ArrowLeft/>{folder?.name}</Link>
            <div className='flex gap-2'>
                <UploadImage parent={params.folder as string}/>
                <CreateNewFolder parent={params.folder as string}/>
            </div>
        </div>
        <div className='flex gap-4 bg-[#00000005] justify-center border-dashed border-muted-forground w-full h-[200px] rounded-xl border-[2px] mb-4 items-center'>
            <ImageIcon  size={22}/>
            Select images
        </div>
        <Separator className='my-10'/>
        <h1 className='text-2xl mb-4'>Children Folders</h1>
        <div className='grid gap-4 grid-cols-3 '>
            {
                folders.length>0 &&
                folders.map((f) => {
                    return (
                        <FolderComp folder={f} key={f.id}/>
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

    {
        photos.length>0 &&
        photos.map((p) => {
            return(
                <ImageComp key={p.id} src={p.image}/>
            )
        })
    }
        </div>
    </div>
  )
}


const ImageComp = ({src}:{src:string}) => {
    return (
            <div className='bg-[#fafaf8] overflow-hidden aspect-square border shadow-sm rounded-xl'>
                <img className='w-full h-full object-contain' src={src} alt=""/>
            </div>
    )
}


export default Page