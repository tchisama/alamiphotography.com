import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Testimonial({}: Props) {
  return (
    <div className='my-20 fontcharm'>
      <div className='flex items-center'>
        <div className='relative flex-[2]'>
            <img className='w-full rounded-xl shadow-lg' src='https://www.niallscullyphotography.com/wp-content/uploads/2022/12/Eimear-Niall-277-1-scaled.jpeg?x15971'></img>
        </div>
        <div className='flex-[3] flex gap-12 justify-center'>
            <Link href={"/"} className='w-[300px] rotate-1 -translate-y-20 flex flex-col gap-2 items-center'>
                <img className='rounded-xl  shadow-xl' src="https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Ciara-Shane-361-597x894.jpg?x15971" alt="" />
                <h1 className='text-3xl  mt-4'>Testimonials</h1>
                <h1 className='text-xl items-center text-muted-foreground lowercase flex gap-2'>REAL CLIENT MESSAGES <ArrowRight/></h1>
            </Link>
            <Link href={"/"} className='w-[300px] -rotate-1 translate-y-20 flex flex-col gap-2 items-center'>
                <img className='rounded-xl shadow-xl w-full' src="https://www.niallscullyphotography.com/wp-content/uploads/2023/01/rachel-137-1-595x894.jpg?x15971" alt="" />
                <h1 className='text-3xl  mt-4'>Experience</h1>
                <h1 className='text-xl items-center text-muted-foreground lowercase flex gap-2'>SEE HOW I WORK <ArrowRight/></h1>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Testimonial