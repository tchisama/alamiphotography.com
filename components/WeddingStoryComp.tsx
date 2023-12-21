import React from 'react'
import { Button } from './ui/button'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    i:number,
    item:{
        Image: string,
        content: string,
        "full story link": string,
        id: string,
        name: string,
        "wedding type": string
    }
}

const WeddingStoryComp = ({i,item}: Props) => {
  return (
    <div className={
        classNames({
            'flex flex-col md:flex-row my-24 md:p-8 md:px-12  gap-8 hover:bg-white duration-200':true,
            'md:flex-row-reverse' :  i % 2 === 0 ,
        })}>
        <div className='md:flex-[4] md:-translate-y-20'>
            <Image alt="" width={900} height={600} className='w-full object-cover bg-[#0002]' src={item.Image}></Image>
        </div>
        <div className='md:flex-[5] p-4 flex items-start flex-col gap-8'>
            <p className='text-lg'>{item['wedding type']}</p>
            <h1 className='md:text-6xl text-4xl'>
                {item.name}
            </h1>
            <p className='text-sm md:text-md md:mr-8'>{item.content}</p>
            <Link href={item['full story link']}>
                <Button variant={"outline"} className='text-xl'>Full story</Button>
            </Link>
        </div>
    </div>
  )
}

export default WeddingStoryComp