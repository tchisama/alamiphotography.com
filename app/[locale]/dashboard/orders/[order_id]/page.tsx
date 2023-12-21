"use client"
import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

function Page({}: Props) {
    const param = useParams()
    const [order,setOrder] = useState<any>()
    useEffect(()=>{
        if(!param.order_id) return
        getDoc(doc(db,"orders",param.order_id as string)).then((snap)=>{
            if(!snap.exists()) return
            console.log("image" , snap.data())
            setOrder({...snap.data(),id:snap.id})
        })
    },[param.order_id])
  return (
    <div className='container'>
        <div className='flex gap-8'>
        <Link href={"/dashboard/orders"} className='flex gap-2 items-center font-sans text-xl'><ArrowLeft/> Go Back</Link>
        <h1 className='text-5xl my-8'>Order Details</h1>
        </div>
        <div className='space-y-4'>
            <div>
                <p className='text-2xl font-bold'>Order ID</p>
                <p className='text-xl font-sans'>{order?.id}</p>
            </div>
            <div>
                <p className='text-3xl font-bold'>Name</p>
                <p className='text-xl font-sans'>{order?.name}</p>
            </div>
            <div>
                <p className='text-3xl font-bold'>Date</p>
                <p className='text-xl font-sans'>{order?.date}</p>
            </div>
            <div>
                <p className='text-3xl font-bold'>Email</p>
                <Link className='text-xl font-sans hover:translate-x-2 flex gap-2 items-center duration-150' href={`mailto:${order?.email}`}>{order?.email} <ArrowRight/></Link>
            </div>
            <div>
                <p className='text-3xl font-bold'>Number</p>
                <p className='text-xl font-sans'>{order?.number}</p>
            </div>
            <div>
                <p className='text-3xl font-bold'>Message</p>
                <p className='text-xl font-sans'>{order?.message}</p>
            </div>
        </div>

    </div>
  )
}

export default Page