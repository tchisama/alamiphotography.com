import React from 'react'
import { Button } from './ui/button';
import { Check, Plus, Replace, X } from 'lucide-react';
import { Separator } from './ui/separator';

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
        <HomeSlider/>
        <Separator/>
        <CheckOutMyWork/>
        <Separator/>
        <CheckMyPackages/>
    </div>
  )
}

const HomeSlider = () => {
    return(
        <>
      <h1 className='text-4xl my-4'>Home Page Slider</h1>
      <div className='flex  gap-4 h-[330px] w-full overflow-x-scroll'>
        <button className='h-[300px] border aspect-[3/4] bg-[#fafaf8] flex gap-2 justify-center items-center'>
            <Plus/> Add image
        </button>
        {images.map((img, index) => (
            <div className='w-fit h-[300px] relative aspect-[3/4]' key={index}>
                <img className='w-full h-full object-cover' src={img} alt="" />
                <Button size={"icon"} variant={"outline"} className='absolute right-0 top-0'><X/></Button>
            </div>
        ))}
      </div>
        </>
    )
}

const CheckOutMyWork = () => {
    return(
        <div>
            <h1 className='text-4xl my-8'>Check Out My Work</h1>
            <div className='flex gap-6'>
                <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
                    <img className='w-full h-full object-cover' src={images[0]} alt="" />
                    <Button size={"icon"} variant={"outline"} className='absolute right-0 top-0'><Replace/></Button>
                    <h2 className='text-2xl'>Wedding</h2>
                </div>
                <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
                    <img className='w-full h-full object-cover' src={images[1]} alt="" />
                    <Button size={"icon"} variant={"outline"} className='absolute right-0 top-0'><Replace/></Button>
                    <h2 className='text-2xl'>Editorial</h2>
                </div>
                <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
                    <img className='w-full h-full object-cover' src={images[2]} alt="" />
                    <Button size={"icon"} variant={"outline"} className='absolute right-0 top-0'><Replace/></Button>
                    <h2 className='text-2xl'>Engagements</h2>
                </div>
            </div>
        </div>
    )
}
const CheckMyPackages = () => {
    return(
        <div>
            <h1 className='text-4xl my-8'>Check my packages</h1>
            <div className='flex gap-6'>
                <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
                    <img className='w-full h-full object-cover' src={"https://www.niallscullyphotography.com/wp-content/uploads/2022/12/Eimear-Niall-277-1-scaled.jpeg?x15971"} alt="" />
                    <Button size={"icon"} variant={"outline"} className='absolute right-0 top-0'><Replace/></Button>
                    <h2 className='text-2xl'>background</h2>
                </div>
                <div className='w-8'></div>
                <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
                    <img className='w-full h-full object-cover' src={"https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Ciara-Shane-361-597x894.jpg?x15971"} alt="" />
                    <Button size={"icon"} variant={"outline"} className='absolute right-0 top-0'><Replace/></Button>
                    <h2 className='text-2xl'>Testimonials</h2>
                </div>
                <div className='w-fit mb-8 h-[300px] relative aspect-[3/4]' >
                    <img className='w-full h-full object-cover' src={"https://www.niallscullyphotography.com/wp-content/uploads/2023/01/rachel-137-1-595x894.jpg?x15971"} alt="" />
                    <Button size={"icon"} variant={"outline"} className='absolute right-0 top-0'><Replace/></Button>
                    <h2 className='text-2xl'>Experience</h2>
                </div>
            </div>
        </div>
    )
}
export default DashboardHomePage