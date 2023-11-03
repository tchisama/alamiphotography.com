import React from 'react'
import { Button } from './ui/button'
import classNames from 'classnames'

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
            <img className='w-full h-full' src='https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1600'></img>
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