"use client"
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { Check, Coffee, Replace } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';



/// i want in the props the section and the image and the html input atributes

type Props = {
    section:string,
    text:string,
}

function ChangeTextTo({section,text}: Props) {
    const [config, setConfig] = useState<string>();
    const [edit, setEdit] = useState<boolean>(false)
    useEffect(() => {
        const unSub = onSnapshot(doc(db, "configs",section), (doc) => {
            if(!doc.exists()) return
            setConfig(doc.data()[text] ?? "" as string)
        })
        return () => unSub()
    },[section,text])
    const changeText = () => {
        updateDoc(doc(db, "configs",section), {
            [text]:config
        })
    }
  return (
    <>
        {
            edit ? <Textarea  value={config} onChange={(e) => setConfig(e.target.value)} className='w-full font-sans h-full font-medium' /> :
            <span className='font-sans font-medium break-words'>{config=="" ? <span className='opacity-50 font-sans font-medium'>there is no value</span>: config}</span>
        }

        <Button onClick={() => {
            setEdit(!edit)
            if (edit) {
                changeText()
            }
        }} size={"icon"} variant={"outline"} className='absolute right-0 top-0'>
            {
                edit ? <Check/> : <Replace/>
            }
        </Button>
    </>
  )
}

export default ChangeTextTo