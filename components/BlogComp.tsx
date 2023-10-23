import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const BlogComp = (props: Props) => {
  return (
    <Link href={"/blog/0"} className='flex group  hover:bg-[#fff] md:p-2 shadow-none hover:shadow-lg hover:scale-[1.01] flex-col gap-4 items-center pb-4 md:pb-8 rounded-xl duration-300'>
        <img className='w-full aspect-square object-cover group-hover:shadow-none duration-300 shadow-lg rounded-xl' src='https://www.niallscullyphotography.com/wp-content/uploads/2023/10/Michelle-Darragh-681-768x1154.jpg' alt=''></img>
        <h3 className='md:text-xl text-center'>Wedding</h3>
        <h2 className='text-xl md:text-2xl text-center'>Top Wedding Stationary Suppliers</h2>
        <h4 className='text-sm md:text-base text-muted-foreground text-center'>September 15, 2023</h4>
    </Link>
  )
}

export default BlogComp