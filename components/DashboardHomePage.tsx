"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Check, Plus, Replace, X } from 'lucide-react';
import { Separator } from './ui/separator';
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import HomeSliderDashboard from './homeSliderDashboard';
import ChangeImageTo from './ChangeImageTo';
import Image from 'next/image';
import ImageDashboard from './ImageDashboard';
import H from './H';

type Props = {}

const images = [
  "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const DashboardHomePage = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 pb-8'>
        <HomeSliderDashboard/>

        <Separator/>
        <h1 className='text-4xl my-8'>Hello Section</h1>
        <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
            <ImageDashboard width={300} height={400} section={"aboutPage"} image={"helloHome"}/>
        </div>
        <Separator/>
        <CheckOutMyWork/>
        <Separator/>
        <CheckMyPackages/>
    </div>
  )
}


type ConfigCheck = {
    wedding : string,
    films : string,
    engagement : string
}

const CheckOutMyWork = () => {
    const [config, setConfig] = useState<ConfigCheck|null>();
    useEffect(() => {
        const unSub = onSnapshot(doc(db, "configs","checkOutMyWork"), (doc) => {
            setConfig(doc.data() as ConfigCheck)
        })
        return () => unSub()
    },[])
    return(
        <div>
            <h1 className='text-4xl my-8'>Check Out My Work</h1>
            <div className='flex gap-6'>
                <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
                    <Image width={300} height={400} className='w-full h-full object-cover' src={config?.wedding?? ""} alt="" />
                    <ChangeImageTo section={"checkOutMyWork"} image={"wedding"}/>
                    <h2 className='text-2xl'>Wedding</h2>
                </div>
                <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
                    <Image width={300} height={400} className='w-full h-full object-cover' src={config?.films?? ""} alt="" />
                    <ChangeImageTo section={"checkOutMyWork"} image={"films"}/>
                    <h2 className='text-2xl'>films</h2>
                </div>
                <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
                    <Image width={300} height={400} className='w-full h-full object-cover' src={config?.engagement?? ""} alt="" />
                    <ChangeImageTo section={"checkOutMyWork"} image={"engagement"}/>
                    <h2 className='text-2xl'>Engagements</h2>
                </div>
            </div>
        </div>
    )
}
type ConfigPackages = {
    bg: string,
    testimonials: string,
    experience: string
}
const CheckMyPackages = () => {
    const [config, setConfig] = useState<ConfigPackages|null>();
    useEffect(() => {
        const unSub = onSnapshot(doc(db, "configs","checkPackages"), (doc) => {
            setConfig(doc.data() as ConfigPackages)
        })
        return () => unSub()
    },[])
    return(
        <div>
            <h1 className='text-4xl my-8'>Check my packages</h1>
            <div className='flex gap-6'>
                <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
                    <Image width={300} height={400} className='w-full h-full object-cover' src={config?.bg?? ""} alt="" />
                    <ChangeImageTo section={"checkPackages"} image={"bg"}/>
                    <h2 className='text-2xl'>background</h2>
                </div>
                <div className='w-8'></div>
                <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
                    <Image width={300} height={400} className='w-full h-full object-cover' src={config?.testimonials?? ""} alt="" />
                    <ChangeImageTo section={"checkPackages"} image={"testimonials"}/>
                    <h2 className='text-2xl'>Testimonials</h2>
                </div>
                <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
                    <Image width={300} height={400} className='w-full h-full object-cover' src={config?.experience?? ""} alt="" />
                    <ChangeImageTo section={"checkPackages"} image={"experience"}/>
                    <h2 className='text-2xl'>Experience</h2>
                </div>
            </div>
        </div>
    )
}
export default DashboardHomePage