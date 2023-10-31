"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Image, ImageIcon, Loader, Upload } from 'lucide-react'

import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from '@/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
  
type Props = {
    parent:string
}

const UploadImage = (props: Props) => {

  const [file, setFile] = useState<File|null>();
  const [percent, setPercent] = useState(0);
 
  // Handles input change event and updates state
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if(event.target?.files) {
        setFile(event.target?.files[0]);
    }
  }

  useEffect(() => {
    if (file && percent === 0) {
        const storageRef = ref(storage, `/files/${file?.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
     
                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then(async(url) => {
                    const docRef = await addDoc(collection(db, "photos"), {
                        name:file.name,
                        image:url,
                        parent:props.parent,
                        createdAt:serverTimestamp()
                    });
                    setPercent(0)
                });
            }
        ); 
    }
  },[file, percent, props.parent])

  return (
    <div>
        <label htmlFor="fileInput">
                <div className='px-4 cursor-pointer bg-primary text-white py-2 flex gap-2 rounded-lg shadow-md'>
                    {
                        percent === 0 ?
                    <><ImageIcon size={20}/> Add Image</>
                    :
                    <><Loader className='animate-spin' size={20}/> Uploading ( {percent} % )</>
                    }
                </div>
        </label>
        <input id="fileInput" accept="image/*" className='hidden' onChange={handleChange} type={"file"}/>
    </div>
 
  )
}

export default UploadImage