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
type Props = {}

const VideoPlayer = (props: Props) => {
  return (
<Dialog >
  <DialogTrigger asChild>
        <button className="absolute top-[50%] left-[50%] p-10 group-hover:p-11 duration-200 shadow-md -translate-y-1/2 -translate-x-1/2 border-[2px] border-white rounded-full">
            <Play strokeWidth={1} className="w-12 h-12 text-white" />
        </button>
  </DialogTrigger>
  <DialogContent className=' flex items-center justify-center shadow-none border-none w-[75vw] h-fit p-0 max-w-[75vw] max-h-none bg-transparent'>
  <iframe 
  src="https://player.vimeo.com/video/888091770?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" 
  allow="autoplay; fullscreen; picture-in-picture" 
  className=' w-[75vw] h-full aspect-video'
  title="alami_photography_home_video">
  </iframe>
  </DialogContent>
</Dialog>

  )
}

export default VideoPlayer