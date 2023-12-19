import React, { useEffect } from 'react'
import { Button } from './ui/button';
import { Check, Edit2Icon, Plus, Replace, X } from 'lucide-react';
import { Separator } from './ui/separator';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Image from 'next/image';
import ChangeImageTo from './ChangeImageTo';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';
import ImageDashboard from './ImageDashboard';
  
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
const DashboardAboutPage = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 pb-8'>
        <HeroSection/>
        <Separator/>
    </div>
  )
}


const HeroSection = () => {
    return(
        <div>
            <h1 className='text-4xl my-4'>Hero section image</h1>
            <div className='flex gap-6'>
                <div className='w-fit mb-8 h-[300px] relative aspect-[4/2]' >
                    <ImageDashboard width={400} height={300} section="aboutPage" image="hero"></ImageDashboard>
                </div>
            </div>
            <h1 className='text-4xl my-4'>Hello Section</h1>
            <div className='flex gap-6'>
                <div className='w-[300px] mb-8 relative'>
                    <ImageDashboard width={300} height={400} section="aboutPage" image="hello"></ImageDashboard>
                </div>
            </div>
            <h1 className='text-4xl my-4'>Check your date</h1>
            <div className='flex gap-6'>
                <div className='w-fit mb-8 h-[300px] relative aspect-[3/2]' >
                    <ImageDashboard width={400} height={300} section="aboutPage" image="checkYourDate"></ImageDashboard>
                </div>
            </div>
        </div>
    )
}

export default DashboardAboutPage