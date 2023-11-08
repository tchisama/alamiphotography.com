"use client"
import { db } from '@/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { Plus, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
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
import { Input } from './ui/input';
import FileExplorer from './FileExplorer';
  
type Props = {}

const HomeSliderDashboard = (props: Props) => {
    const [imagesSlider, setImages] = useState<string[]>([]);
    // const [img, setImg] = useState<string>("");
  useEffect(() => {
    getDoc(doc(db, "configs","homePageImagesSlider")).then((docSnap) => {
      setImages(docSnap.data()?.images as string[])
    })
  },[])
  const addImage = (img:string) => {
    updateDoc(doc(db, "configs","homePageImagesSlider"), {
        images:[
            img,
            ...imagesSlider
        ]
    }).then(() => {
    setImages(p=>[
        img,
        ...p
    ])
    })
  }
  const deleteImage=(index:number)=>{
    updateDoc(doc(db, "configs","homePageImagesSlider"), {
        images:[
            ...imagesSlider.slice(0,index),
            ...imagesSlider.slice(index+1)
        ]
    }).then(()=>{
        setImages(p=>[
            ...p.slice(0,index),
            ...p.slice(index+1)
        ])
    })
  }
    return(
        <>
      <h1 className='text-4xl my-4'>Home Page Slider</h1>
      <div className='flex  gap-4 h-[330px] w-full overflow-x-scroll'>
        <FileExplorer cta={addImage} >
            <button className='h-[300px] border aspect-[3/4] bg-[#fafaf8] flex gap-2 justify-center items-center'>
                <Plus/> Add image
            </button>
        </FileExplorer>

        {imagesSlider?.map((img, index) => (
            <div className='w-fit h-[300px] relative aspect-[3/4]' key={index}>
                <img className='w-full h-full object-cover' src={img} alt="" />
                <Button onClick={()=>deleteImage(index)} size={"icon"} variant={"outline"} className='absolute right-0 top-0'><X/></Button>
            </div>
        ))}
      </div>
        </>
    )
}

export default HomeSliderDashboard