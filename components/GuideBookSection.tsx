import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { Separator } from './ui/separator'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

type Props = {}

const GuideBookSection = (props: Props) => {
  return (
    <div className='flex gap-10 mt-32 items-center'>
        <div className='flex-[4] flex flex-col gap-4 items-center text-center'>
            <h1 className='text-5xl'>I&apos;LL SEND YOU A GUIDE WITH EVERYTHING YOU NEED TO KNOW</h1>
            <p className='text-lg font-sans'>COUPLES THAT BOOK ME, GET MY WEDDING EXPERIENCE GUIDE FREE! THIS GUIDE WILL HELP YOU MAKE THE MOST OF YOUR WEDDING DAY WITH TIPS ON FIRST LOOK, DETAILS, TIMINGS, PORTRAITS AND MUCH MORE.</p>
            <p className='text-lg font-sans'>OR YOU CAN PURCHASE THE WEDDING EXPERIENCE PDF USING THE BUTTON BELOW!</p>
            <Separator/>
            <Input className='font-sans' placeholder='Name' />
            <Input className='font-sans' placeholder='Email' />
            <Textarea className='font-sans' placeholder='Why you want it'/>
            <Button className='text-lg pt-7 uppercase tracking-wider flex gap-4 items-center'>Get Now <ArrowRight/></Button>
        </div>
        <div className='flex-[4]'>
            <p className='text-center text-2xl'>From the moment you book me and up to your last image delivered, you have my full undivided attention, energy and care. I can help you fine tune the schedule of your wedding, so we catch the best light for intimate portraits. I&apos;ve worked with tons of vendors over the years and can offer a recommendation if you still haven&apos;t found a florist, make up artist or candy bar provider.</p>
        </div>
        <div className='flex-[2]'>
            <img className='w-full' src="https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Film-Shots-1-1-600x894.jpg" alt="" />
        </div>
    </div>
  )
}

export default GuideBookSection