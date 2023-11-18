import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Testimonial({}: Props) {
  return (
    <div className='my-20 fontcharm md:px-4'>
      <div className='flex md:flex-row flex-col items-center'>
        <div className='relative flex-[2]'>
            <Image width={500} height={750} alt="" className='w-full  bg-[#0002]  hidden md:block scale-[1.08] max-w-[100vh] ' src='https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F887469811%20Photo%20a%20gauche!-min.jpg?alt=media&token=ce6caedb-67c1-4755-924d-fc8ef9dcfc13'></Image>
        </div>
        <div className='flex-[3] flex md:flex-row md:p-0 pt-16 flex-col gap-12 justify-center'>
            <Link href={"/"} className='md:w-[300px] w-[200px]  md:-translate-y-20 flex flex-col md:gap-2 items-center'>
                <Image width={200} height={300} className='w-[180px] bg-[#0002] ' src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F553804152%20TESTIMONIALS-min.jpg?alt=media&token=553b49ea-cf2d-4d5c-8351-db7dc4ddefc7" alt="" />
                <h1 className='md:text-4xl uppercase text-xl  mt-4'>Testimonials</h1>
                <h1 className='md:text-xl text-muted-foreground lowercase flex-col items-center flex gap-2'>REAL CLIENT MESSAGES <ArrowRight/></h1>
            </Link>
            <Link href={"/investment"} className='md:w-[300px] w-[200px]  md:translate-y-20 flex flex-col md:gap-2 items-center'>
                <Image width={200} height={300} className='w-[180px] bg-[#0002] ' src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F350238573%20EXPERIENCE-min.jpg?alt=media&token=bdd103ec-e410-457e-ae1c-4fa360397643" alt="" />
                <h1 className='md:text-4xl uppercase text-xl  mt-4'>Experience</h1>
                <h1 className='md:text-xl  text-muted-foreground lowercase flex flex-col items-center gap-2'>SEE HOW I WORK <ArrowRight/></h1>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
