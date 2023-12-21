"use client"
import { db } from '@/firebase'
import { collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { ArrowRight, Check, Edit, Replace, Trash } from 'lucide-react'
import { Textarea } from './ui/textarea'
import FileExplorer from './FileExplorer'
import Link from 'next/link'

type Props = 
{
    for_:string,
    inputs:{
        type:"text"|"paragraph"|"Image"|"number"|"link",
        props?: any,
        title:string,
    }[],
    grid?:boolean
}

function DataDisplayer({for_,inputs,grid=false}: Props) {
    const [data,setData] = useState<any[]>()
    useEffect(() => {
        // get all the docs using onsnapshot by for_
        onSnapshot(collection(db, for_), (snapshot) => {
            setData(snapshot.docs.map((doc) => ({...doc.data(),id:doc.id})))
            console.log(snapshot.docs.map((doc) => ({...doc.data(),id:doc.id})))
        })
    },[setData,for_])
  return (
    <div className={'grid gap-4 ' + (grid ? "grid-cols-2" : "grid-cols-1")}>
        {
            data?.map((item,index) => {
                return (
                    <DataDisplayerItem key={index} for_={for_} inputs={inputs} index={index} item={item}></DataDisplayerItem>
                )
            })
        }
    </div>
  )
}

type Props2 = {
    for_:string,
    inputs:{
        type:"text"|"paragraph"|"Image"|"number"|"link",
        props?: any,
        title:string,
    }[],
    index:number,
    item:any,
}

const DataDisplayerItem = ({for_,inputs,index,item}: Props2) => {
    const [edit,setEdit] = useState(false)
    const [itemData,setItemData] = useState<any>(item)
    const update = () => {
        updateDoc(doc(db, for_,item.id), itemData)
        setEdit(false)
    }
    const callToAction = (v:string) => {
        setItemData({...itemData,Image:v})
    }
    const Delete = () => {
        const confirm = window.confirm("Are you sure you want to delete this item?")
        if(!confirm) return
        deleteDoc(doc(db, for_,item.id))
        
    }
    return (
                    <div key={index} className="flex gap-8 border p-2 relative">
                        <div className='relative'>
                        {
                            inputs.find((input) => input.type === "Image") ? 
                            <>
                            <Image className={'h-[350px] w-fit  object-contain bg-gray-50 border'+ ((for_ === "wedding storys" || for_ === "wedding films")  ? " aspect-[3/2]" : " aspect-[2/3]")} src={itemData.Image} height={400} width={400} alt="" /> 
                            {
                                edit &&
                                <FileExplorer cta={callToAction}>
                                    <Button size={"icon"} className='absolute right-0 top-0'><Replace/></Button>
                                </FileExplorer>
                            }
                            </>
                            : null
                        }
                        </div>
                        <div className='space-y-2 p-4 flex-1'>
                        {
                            inputs.filter((input) => input.type !== "Image").map((input) => {
                                return (
                                    <div key={input.title} className="flex-1 max-w-[50vw] space-y-2">
                                        <p className='font-sans text-xl font-medium'>{input.title}</p>
                                        {
                                            edit ? 
                                            (
                                            input.type === "text"?
                                            <input value={itemData[input.title]} onInput={(e:any) => setItemData({...itemData,[input.title]:e.target.value})} type={input.type} className='border font-sans p-2 w-full' defaultValue={item[input.title]}/> :
                                            input.type === "link"?
                                            <input value={itemData[input.title]} onInput={(e:any) => setItemData({...itemData,[input.title]:e.target.value})} type={input.type} className='border font-sans p-2 w-full' defaultValue={item[input.title]}/> :
                                            input.type === "paragraph" ?
                                            <Textarea value={itemData[input.title]} onInput={(e:any) => setItemData({...itemData,[input.title]:e.target.value})} className='border p-2 min-h-[150px] w-full font-sans' defaultValue={item[input.title]}/>:
                                            null
                                            ):
                                            (
                                                input.type !== "link" ?
                                                <p className='font-sans'>{item[input.title]?? ""}</p>:
                                                <Link className='font-sans text-blue-900 hover:translate-x-2 duration-200 flex gap-4 relative' href={item[input.title]}>
                                                    {item[input.title]}
                                                    <ArrowRight/>
                                                </Link>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                        </div>
                        {
                            edit &&
                        <Button onClick={Delete} variant={"destructive"} className='absolute right-11 top-0' size={"icon"}>
                            <Trash/>
                        </Button>
                        }

                        <Button onClick={()=>{
                            if(edit){
                                update()
                            }else{
                                setEdit(!edit)
                            }
                            }
                        } className='absolute right-0 top-0' size={"icon"}>
                            {
                                !edit ? <Edit /> : <Check  />
                            }
                        </Button>
                    </div>
    )
}



export default DataDisplayer