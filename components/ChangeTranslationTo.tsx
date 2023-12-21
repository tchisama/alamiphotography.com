"use client"
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { AlertTriangle, Check, Coffee, Replace } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { AlertTitle } from './ui/alert';



/// i want in the props the section and the image and the html input atributes

type Props = {
    text:string,
    lang:"en" | "fr"
}

function ChangeTranslationTo({text,lang}: Props) {
    const [config, setConfig] = useState<string>();
    const [edit, setEdit] = useState<boolean>(false)
    const [data, setData] = useState<{en:string,fr:string}>({
        en:"",
        fr:""
    })
    useEffect(() => {
        try {
            const unSub = onSnapshot(doc(db, "configs","translate"), (doc) => {
                if(!doc.exists()) return
                if(!doc.data()[text]) return
                if(!doc.data()[text][lang]) return setConfig("")
                setConfig(doc.data()[text][lang] ?? "" as string)
                setData(doc.data()[text])
            })
            return () => unSub()
        } catch (error) {
            setConfig("")
        }
    },[text,lang])
    const changeText = () => {
        console.log(data)
        // i want to update just the [long]
        updateDoc(doc(db, "configs","translate"), {
            [text]:{
                ...data,
                [lang]:config
            }
        })
    }
  return (
    <>
        {
            edit ? <Textarea  value={config} onChange={(e) => setConfig(e.target.value)} className='w-full font-sans min-h-[200px] h-full font-medium' /> :
            <span className='font-sans font-medium break-words'>{config=="" ? <span className='opacity-50 font-sans font-medium'>there is no value</span>: <span className='font-sans font-medium' dangerouslySetInnerHTML={{__html: config?.replace(/\n/g,"<br/>" ) as string}}></span> }</span>
        }
        <p className='opacity-80 font-sans font-medium'>{text}</p> 
        {
            !data?.en || !data?.fr ? (
            <div className='bg-yellow-50 group w-[40px] h-[40px] overflow-hidden  text-yellow-700 p-2 text-sm rounded-xl duration-300 justify-center hover:w-fit flex gap-4 items-center font-sans'>
                <AlertTriangle size={16}/>
                <div className='group-hover:block hidden font-sans font-medium'>
                    You need to add {!data?.fr ? "french" : ""} - {!data?.en ? "english" : ""} translation
                </div>
            </div>
            ) : null
        }
        <Button onClick={() => {
            setEdit(!edit)
            if (edit) {
                changeText()
            }
        }} size={"icon"} className='absolute right-2 top-2'>
            {
                edit ? <Check/> : <Replace/>
            }
        </Button>
    </>
  )
}

export default ChangeTranslationTo