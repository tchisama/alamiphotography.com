"use client"
import { db } from '@/firebase'
import { collection, doc, getDoc } from 'firebase/firestore'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {
    className: string
    section: string
    name: string
    width: number
    height: number
}

const GetImage = ({className,section,name,width,height}: Props) => {
    const [image,setImage] = useState<string>("")
    useEffect(()=>{
        getDoc(doc(db,"configs",section)).then((snap)=>{
            if(!snap.exists()) return
            console.log("image" , snap.data())
            setImage(snap.data()[name] as string)
        })
    },[section,name])
  return (
    <Image src={image??""} className={"bg-[#0002] "+className} width={width} height={height} alt=''></Image>
  )
}

export default GetImage