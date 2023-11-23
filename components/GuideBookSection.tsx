import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { Separator } from './ui/separator'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import Image from 'next/image'

type Props = {}

const GuideBookSection = (props: Props) => {
  return (
    <div className='flex gap-10 mt-32 items-center'>
        <div className='flex-[4] flex flex-col gap-4 items-center text-center'>
            <h1 className='text-5xl'>I&apos;LL SEND YOU A GUIDE WITH EVERYTHING YOU NEED TO KNOW</h1>
            <p className='text-lg font-sans'>COUPLES THAT BOOK ME, GET MY WEDDING EXPERIENCE GUIDE FREE! THIS GUIDE WILL HELP YOU MAKE THE MOST OF YOUR WEDDING DAY WITH TIPS ON FIRST LOOK, DETAILS, TIMINGS, PORTRAITS AND MUCH MORE.</p>
            <Separator/>
            <Input className='font-sans' placeholder='Name' />
            <Input className='font-sans' placeholder='Email' />
            <Textarea className='font-sans' placeholder="I'm open to any special requests."/>
            <Button className='text-lg pt-7 uppercase tracking-wider flex gap-4 items-center'>Get Now <ArrowRight/></Button>
        </div>
        <div className='flex-[4]'>
            <p className='text-center text-2xl'>From the moment you book me and up to your last image delivered, you have my full undivided attention, energy and care. I can help you fine tune the schedule of your wedding, so we catch the best light for intimate portraits. I&apos;ve worked with tons of vendors over the years and can offer a recommendation if you still haven&apos;t found a florist, make up artist or candy bar provider.</p>
        </div>
        <div className='flex-[2]'>
            <Image width={500} height={750} className='w-full bg-[#0002]' src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F943996204%20SEND%20YOU%20A%20GUIDE.jpg?alt=media&token=141e01a2-8b2d-41a3-bfb5-d947c30429eb" alt="" />
        </div>
    </div>
  )
}

export default GuideBookSection