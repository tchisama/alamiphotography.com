import React from 'react'
import { Button } from './ui/button'
import classNames from 'classnames'
import Image from 'next/image'

type Props = {
    i:number
}

const WeddingStoryComp = ({i}: Props) => {
  return (
    <div className={
        classNames({
            'flex flex-col md:flex-row my-24 md:p-8 md:px-12  gap-8 hover:bg-white duration-200':true,
            'md:flex-row-reverse' :  i % 2 === 0 ,
        })}>
        <div className='md:flex-[5] md:-translate-y-20'>
            <Image alt="" width={900} height={600} className='w-full h-full bg-[#0002]' src='https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F86831919Test%20gallery%201.jpg?alt=media&token=3570bafe-85b5-4768-a9d0-4a07edf0bdd5'></Image>
        </div>
        <div className='md:flex-[4] p-4 flex items-start flex-col gap-8'>
            <p className='text-lg'>CATEGORY</p>
            <h1 className='md:text-6xl text-4xl'>
                Lauren and Alex wedding Palais Namaskar
            </h1>
            <p className='text-xl md:mr-20'>What better way to start your life together than a picture-perfect, romantic wedding in this stunning venue Palais Namaskar Marrakech⁣, Morocco? hat better way to start your life together than a picture-perfect, romantic wedding in this stunning venue Palais Namaskar Marrakech⁣, Morocco?</p>
            <Button variant={"outline"} className='text-xl'>Full story</Button>
        </div>
    </div>
  )
}

export default WeddingStoryComp