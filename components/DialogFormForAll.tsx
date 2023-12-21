"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Input } from './ui/input'
import Image from 'next/image'
import { Textarea } from './ui/textarea'
import FileExplorer from './FileExplorer'
import { Replace } from 'lucide-react'
import { DialogClose } from '@radix-ui/react-dialog'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase'
  
type Props = {
    for_:string,
    inputs:{
        type:"text"|"paragraph"|"Image"|"number"|"link",
        props?: any,
        title:string,
    }[]
}
function DialogFormForAll({for_,inputs}: Props) {
    const [data,setData] = useState<any[]>([])
    const [image,setImage] = useState<string>("")
    useEffect(() => {
        setData(inputs.map((input) => input.type === "Image" ? "" : ""))
    },[inputs])
    const submit = async () => {
        // lets create a new for_ with the our data and image if it exists
        const New = inputs.filter((input) => input.type !== "Image").reduce((acc, input, index) => {
            if (input.type === "Image") {
                return {
                    ...acc,
                    [input.title]: image,
                };
            } else {
                return {
                    ...acc,
                    [input.title]: data[index],
                };
            }
        }, inputs.find((input) => input.type === "Image") ?  {
            "Image": image,
            createdAt: Timestamp
        } : {
            createdAt: Timestamp
        });

        addDoc(collection(db, for_+"s"), New)

        console.log(New)
    }
    const reset = () => {
        setData(inputs.map((input) => input.type === "Image" ? "" : ""))
        setImage("")
    }
  return (
        <Dialog>
        <DialogTrigger asChild>
            <Button onClick={reset} className='font-sans'>Create New</Button>
        </DialogTrigger>
        <DialogContent className='max-w-5xl'>
            <DialogHeader>
            <DialogTitle className='font-sans'>Lets Create A New <span className='capitalize font-sans'>{for_}</span></DialogTitle>
            <DialogDescription className='flex pt-10 w-full gap-8'>
                {
                    inputs.find((item) => item.type === "Image") ? <ImageDialog image={image} setImage={setImage}/> : null
                }
                <div className='space-y-3 flex-1'>
                    {
                        inputs.filter((item) => item.type !== "Image").map((item,index) => {
                            return (
                                <>
                                <h3 className='font-sans capitalize'>{item.title}</h3>
                                {
                                item.type === "number" ? <Input value={data[index]??""} onChange={(e) => setData(data.map((d,i) => i === index ? e.target.value : d))} className='font-sans' type='number'/> :
                                item.type === "text" ? <Input value={data[index]??""} onChange={(e) => setData(data.map((d,i) => i === index ? e.target.value : d))} className='font-sans' type='text'/> :
                                item.type === "link" ? <Input value={data[index]??""} onChange={(e) => setData(data.map((d,i) => i === index ? e.target.value : d))} className='font-sans' type='text'/> :
                                item.type === "paragraph" ? <Textarea className='font-sans min-h-[200px]' value={data[index]??""} onChange={(e) => setData(data.map((d,i) => i === index ? e.target.value : d))}/> : null
                                }
                                </>
                            )
                        })
                    }
                </div>
            </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant={"outline"} className='font-sans'>Close</Button>
                </DialogClose>
                <DialogClose asChild>
                    <Button className='font-sans' onClick={submit}>Create</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
        </Dialog>
  )
}


const ImageDialog = ({image,setImage}:{image:string,setImage:(v:string) => void}) => {
    const callToAction = (v:string) => {
        setImage(v)
    }
    return <div className='mb-8 h-fit font-sans flex justify-between text-center items-center border w-[300px] bg-gray-100 relative aspect-[3/4]'>

        {
            image &&
                <Image width={300} className={'w-full h-full object-contain'} height={400} src={image} alt=''></Image>
        }

        <FileExplorer cta={callToAction}>
            <Button size={"icon"} className='absolute right-0 top-0'><Replace/></Button>
        </FileExplorer>
    </div>
}

export default DialogFormForAll