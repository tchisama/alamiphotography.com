import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { Copy, MoreVertical } from 'lucide-react'
import { Photo } from '@/types'
import { deleteDoc, doc } from 'firebase/firestore'
import { db, storage } from '@/firebase'
import { deleteObject, ref } from 'firebase/storage'
import { useToast } from "@/components/ui/use-toast"

type Props = {}

const ImageComp = ({img}:{img:Photo}) => {
    const {toast} = useToast()
  const copySrc = () => {
    navigator.clipboard.writeText(img.image)
  }
  const Delete = () => {
      deleteDoc(doc(db, "photos", img.id)).then(()=>{
        deleteObject(ref(storage, img.name)).then(() => {
            toast({
                title: "Image deleted",
                description: " The image has been deleted successfully",
              })
          })
      })
  }
    return (
            <div className='bg-[#fafaf8] font-mono relative overflow-hidden aspect-square border '>

                <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button className='absolute right-0 top-0' onClick={copySrc} size={"icon"} variant={"outline"} ><MoreVertical/></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='font-mono font-medium'>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Copy Link</DropdownMenuItem>
                    <DropdownMenuItem>Move to folder</DropdownMenuItem>
                    <DropdownMenuItem onClick={Delete} className='text-red-500 bg-red-50'>Delete image</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>

                <img className='w-full h-full object-contain' src={img.image} alt=""/>
            </div>
    )
}

export default ImageComp