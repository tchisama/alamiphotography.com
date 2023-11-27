import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Play, X } from 'lucide-react'
type Props = {
  href: string
}

const VideoPlayer = ({href}: Props) => {
  return (
<Dialog >
  <DialogTrigger asChild>
        <button className="absolute top-[50%] left-[50%] p-10 group-hover:p-11 duration-200 shadow-md -translate-y-1/2 -translate-x-1/2 border-[2px] border-white rounded-full">
            <Play strokeWidth={1} className="w-12 h-12 text-white" />
        </button>
  </DialogTrigger>
  <DialogContent className=' flex items-center justify-center shadow-none border-none w-[75vw] h-fit p-0 max-w-[75vw] max-h-none bg-transparent'>
  <iframe className='w-full h-[90vh] '
        src={href}
        width="100%" height="100%" 
    >
    </iframe>
  </DialogContent>
</Dialog>

  )
}

export default VideoPlayer