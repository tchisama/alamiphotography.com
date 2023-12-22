import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GetText from './GetText'
import GetImage from './GetImage'

type Props = {}

function Testimonial({}: Props) {
  return (
    <div className='my-20 fontcharm md:px-4'>
      <div className='flex md:flex-row flex-col items-center'>
        <div className='relative flex-[2]'>
            <GetImage width={500} height={750} className='w-full  bg-[#0002]  hidden md:block scale-[1.08] max-w-[100vh] ' name='bg' section='checkPackages'></GetImage>
        </div>
        <div className='flex-[3] flex md:flex-row md:p-0 pt-16 flex-col gap-12 justify-center'>
            <Link href={"/testimonials"} className='md:w-[300px] w-[200px]  md:-translate-y-20 flex flex-col md:gap-2 items-center'>
                <GetImage width={200} height={300} className='w-[180px] bg-[#0002] ' name="testimonials" section="checkPackages" />
                <h1 className='md:text-4xl uppercase text-xl  mt-4'>
                  <GetText id="testimonials_title"/>
                </h1>
                <h1 className='md:text-xl text-muted-foreground lowercase flex-col items-center flex gap-2'>
                  <GetText id="testimonials_subtitle"/>
                  <ArrowRight/>
                </h1>
            </Link>
            <Link href={"/experience"} className='md:w-[300px] w-[200px]  md:translate-y-20 flex flex-col md:gap-2 items-center'>
                <GetImage width={200} height={300} className='w-[180px] bg-[#0002] ' name="experience" section="checkPackages" />
                <h1 className='md:text-4xl uppercase text-xl  mt-4'>
                  <GetText id="experience_title"/>
                </h1>
                <h1 className='md:text-xl  text-muted-foreground lowercase flex flex-col items-center gap-2'>
                  <GetText id="experience_subtitle"/>
                  <ArrowRight/>
                </h1>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
