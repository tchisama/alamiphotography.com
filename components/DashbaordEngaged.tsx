import React from 'react'
import { Button } from './ui/button';
import { Check, Plus, Replace, X } from 'lucide-react';
import { Separator } from './ui/separator';

type Props = {}

  const images = [
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Eimear-Conor-434-595x894.jpeg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2019/04/Cliffs-18-of-105.jpg',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Screen-Shot-2023-03-15-at-16.49.15-600x657.png?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Faye-Evan-270-596x894.jpg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Confetti-1st-Edits-33-597x894.jpeg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/fiona-1-3-597x894.jpg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Karla-Jack-291-595x894.jpeg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Eimear-Conor-434-595x894.jpeg?x15971',
    'https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Confetti-1st-Edits-8-597x894.jpeg?x15971',
  ];
const DashboardEngagedPage = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 pb-8'>
        <Images/>
    </div>
  )
}

const Images = () => {
    return(
        <>
      <h1 className='text-4xl my-4'>Wedding Images</h1>
      <div className='grid grid-cols-4  gap-4 h-[330px] w-full'>
        <button className='w-full h-full border aspect-[3/4] bg-[#fafaf8] flex gap-2 justify-center items-center'>
            <Plus/> Add image
        </button>
        {images.map((img, index) => (
            <div className='w-full relative aspect-[3/4]' key={index}>
                <img className='w-full  object-cover' src={img} alt="" />
                <Button size={"icon"} variant={"outline"} className='absolute right-0 top-0'><X/></Button>
            </div>
        ))}
      </div>
        </>
    )
}

export default DashboardEngagedPage