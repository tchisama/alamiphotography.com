import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Testimonial({}: Props) {
  return (
    <div className='my-20 fontcharm'>
      <div className='flex md:flex-row flex-col items-center'>
        <div className='relative flex-[2]'>
            <img className='w-full scale-[1.08]  ' src='https://www.niallscullyphotography.com/wp-content/uploads/2022/12/Eimear-Niall-277-1-scaled.jpeg?x15971'></img>
        </div>
        <div className='flex-[3] flex md:flex-row md:p-0 pt-16 flex-col gap-12 justify-center'>
            <Link href={"/"} className='md:w-[300px] w-[200px]  md:-translate-y-20 flex flex-col md:gap-2 items-center'>
                <img className='' src="https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Ciara-Shane-361-597x894.jpg?x15971" alt="" />
                <h1 className='md:text-3xl text-xl  mt-4'>Testimonials</h1>
                <h1 className='md:text-xl items-center text-muted-foreground lowercase flex gap-2'>REAL CLIENT MESSAGES <ArrowRight/></h1>
            </Link>
            <Link href={"/"} className='md:w-[300px] w-[200px]  md:translate-y-20 flex flex-col md:gap-2 items-center'>
                <img className='' src="https://www.niallscullyphotography.com/wp-content/uploads/2023/01/rachel-137-1-595x894.jpg?x15971" alt="" />
                <h1 className='md:text-3xl text-xl  mt-4'>Experience</h1>
                <h1 className='md:text-xl items-center text-muted-foreground lowercase flex gap-2'>SEE HOW I WORK <ArrowRight/></h1>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Testimonial