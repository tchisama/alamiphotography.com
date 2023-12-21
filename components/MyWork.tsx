
import Link from 'next/link'
import React from 'react'
import H from './H'
import Image from 'next/image'
import GetText from './GetText'
import GetImage from './GetImage'

type Props = {}

const MyWork = (props: Props) => {
  return (
    <div className='my-40 fontcharm'>
        <div className='text-center uppercase mb-6'>
            <H h={5}><GetText id="check_out_my_work_title"/></H>
        </div>
        <div className='flex md:flex-row flex-col gap-8  fontcharm'>

            <Link href={'/wedding'} className='flex-1 uppercase  group flex flex-col items-center gap-8 text-2xl '>
                <div className='relative  overflow-hidden'>
                    <GetImage  width={400} height={600} className=' bg-[#0002] group-hover:blur-0 filter group-hover:scale-105 duration-200' name='wedding' section='checkOutMyWork'></GetImage>
                    <div className='absolute w-full h-full border-[1px] top-0 left-0 border-white scale-95 rounded-lg group-hover:scale-90 duration-200'></div>
                </div>
                <H h={4}><GetText id="weddings"/></H>
            </Link>

            <Link href={'/wedding-film'} className='flex-1 uppercase group flex flex-col items-center gap-8 text-2xl '>
                <div className='relative overflow-hidden'>
                    <GetImage  width={400} height={600} className=' bg-[#0002] group-hover:blur-0 filter group-hover:scale-105 duration-200' section='checkOutMyWork' name='films'></GetImage>
                    <div className='absolute w-full h-full border-[1px] top-0 left-0 border-white scale-95 rounded-lg group-hover:scale-90 duration-200'></div>
                </div>
                <H h={4}><GetText id="films"/></H>
            </Link>

            <Link href={'/weddings'} className='flex-1 uppercase group flex flex-col items-center gap-8 text-2xl '>
                <div className='relative  overflow-hidden'>
                    <GetImage  width={400} height={600} className=' bg-[#0002] group-hover:blur-0 filter group-hover:scale-105 duration-200' section='checkOutMyWork' name='engagement'></GetImage>
                    <div className='absolute w-full h-full border-[1px] top-0 left-0 border-white scale-95 rounded-lg group-hover:scale-90 duration-200'></div>
                </div>
                <H h={4}><GetText id="engagement"/></H>
            </Link>

        </div>
    </div>
  )
}

export default MyWork

