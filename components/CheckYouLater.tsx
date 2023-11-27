import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function CheckYouLater({}: Props) {
  return (
    <div className='flex md:flex-row my-12 flex-col items-center relative'>
        <Image width={900} height={600} alt="" className='md:w-[60vw] bg-[#0002] w-full' src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F758721103%20Philosophieimage-min.jpg?alt=media&token=af263aa0-cd41-41eb-911a-e6e78c560536"/>
        <div className='bg-primary flex flex-col gap-4 text-background p-8 max-w-[500px] md:absolute left-[55%] top-[50%] md:translate-x-[-50%] md:translate-y-[-50%]'>
            <h1 className='text-3xl '>Philosophy</h1>
            <p className='pl-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam doloribus iste laborum, nihil aspernatur illo qui! A hic consectetur quaerat cupiditate vitae voluptatibus blanditiis exercitationem molestias neque dicta. Dolor.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam doloribus iste laborum, nihil aspernatur illo qui! A hic consectetur quaerat cupiditate vitae voluptatibus blanditiis exercitationem molestias neque dicta. Dolor.
            </p>
        </div>
        <div className='flex flex-col p-8 gap-4 flex-1 justify-end items-center'>
            <h1 className='text-2xl md:text-5xl fontroman'>Check your date</h1>
            <Link href={"/contact"}>
              <Button className='text-xl md:text-3xl p-8'>Get In Touch</Button>
            </Link>
        </div>
    </div>
  )
}

export default CheckYouLater