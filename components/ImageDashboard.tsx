"use client"
import { db } from '@/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import ChangeImageTo from './ChangeImageTo';

type Props = {
    width:number,
    height:number,
    section:string,
    image:string
}

function ImageDashboard({width,height,section,image}: Props) {
    const [config, setConfig] = useState<string>();
    useEffect(() => {
        const unSub = onSnapshot(doc(db, "configs",section), (doc) => {
            if(!doc.exists()) return
            setConfig(doc.data()[image] ?? "" as string)
        })
        return () => unSub()
    },[section,image])
  return (
    <>
        <Image width={width} height={height} className='w-full h-full object-cover' src={config?? ""} alt="" />
        <ChangeImageTo section={section} image={image}/>
    </>
  )
}

export default ImageDashboard