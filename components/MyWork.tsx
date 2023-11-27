
import Link from 'next/link'
import React from 'react'
import H from './H'
import Image from 'next/image'

type Props = {}

const MyWork = (props: Props) => {
  return (
    <div className='my-40 fontcharm'>
        <div className='text-center uppercase mb-6'>
            <H h={5}>Check out my work</H>
        </div>
        <div className='flex md:flex-row flex-col gap-8  fontcharm'>

            <Link href={'/wedding'} className='flex-1 uppercase  group flex flex-col items-center gap-8 text-2xl '>
                <div className='relative  overflow-hidden'>
                    <Image alt='' width={400} height={600} className=' bg-[#0002] group-hover:blur-0 filter group-hover:scale-105 duration-200' src='https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F287159791%20Weddings-min.jpg?alt=media&token=e467c4ea-03d9-428b-8f85-290d1eb3c5e0'></Image>
                    <div className='absolute w-full h-full border-[1px] top-0 left-0 border-white scale-95 rounded-lg group-hover:scale-90 duration-200'></div>
                </div>
                <H h={4}>Weddings</H>
            </Link>

            <Link href={'/wedding-film'} className='flex-1 uppercase group flex flex-col items-center gap-8 text-2xl '>
                <div className='relative overflow-hidden'>
                    <Image alt='' width={400} height={600} className=' bg-[#0002] group-hover:blur-0 filter group-hover:scale-105 duration-200' src='https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F431120152%20Films-min.jpg?alt=media&token=bff29a2f-4469-4217-867d-4c2efde93117'></Image>
                    <div className='absolute w-full h-full border-[1px] top-0 left-0 border-white scale-95 rounded-lg group-hover:scale-90 duration-200'></div>
                </div>
                <H h={4}>Films</H>
            </Link>

            <Link href={'/weddings'} className='flex-1 uppercase group flex flex-col items-center gap-8 text-2xl '>
                <div className='relative  overflow-hidden'>
                    <Image alt='' width={400} height={600} className=' bg-[#0002] group-hover:blur-0 filter group-hover:scale-105 duration-200' src='https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F638749303%20Engagement-min.jpg?alt=media&token=97d4dd28-dad8-45d5-9cd4-18657b79474e'></Image>
                    <div className='absolute w-full h-full border-[1px] top-0 left-0 border-white scale-95 rounded-lg group-hover:scale-90 duration-200'></div>
                </div>
                <H h={4}>ENGAGEMENTS</H>
            </Link>

        </div>
    </div>
  )
}

export default MyWork

