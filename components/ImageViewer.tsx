import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  
type Props = {
    className?: string,
    src:string,
    alt:string
}

function ImageViewer({className,src,alt}: Props) {
  return (
<Dialog >
  <DialogTrigger >
    <img src={src} className={className} alt={alt}></img>
  </DialogTrigger>
  <DialogContent className='p-0 w-full h-full  max-h-none max-w-none'>
        <img src={src} className={"w-full h-full object-contain"} alt={alt}></img>
  </DialogContent>
</Dialog>

  )
}

export default ImageViewer