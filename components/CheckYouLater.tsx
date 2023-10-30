import React from 'react'
import { Button } from './ui/button'

type Props = {}

function CheckYouLater({}: Props) {
  return (
    <div className='flex md:flex-row flex-col items-center relative'>
        <img className='md:w-[60vw] w-full' src="https://www.niallscullyphotography.com/wp-content/uploads/2017/06/RUSH-FINAL-EDITS-138.jpg"/>
        <div className='bg-primary flex flex-col gap-4 text-background p-8 max-w-[500px] md:absolute left-[50%] top-[50%] md:translate-x-[-50%] md:translate-y-[-50%]'>
            <h1 className='text-3xl '>Philosophy</h1>
            <p className='pl-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam doloribus iste laborum, nihil aspernatur illo qui! A hic consectetur quaerat cupiditate vitae voluptatibus blanditiis exercitationem molestias neque dicta. Dolor.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam doloribus iste laborum, nihil aspernatur illo qui! A hic consectetur quaerat cupiditate vitae voluptatibus blanditiis exercitationem molestias neque dicta. Dolor.
            </p>
        </div>
        <div className='flex flex-col p-8 gap-4 flex-1 justify-end items-center'>
            <h1 className='text-2xl md:text-5xl fontroman'>Check your date</h1>
            <Button className='text-xl md:text-3xl p-8'>Get In Touch</Button>
        </div>
    </div>
  )
}

export default CheckYouLater