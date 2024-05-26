import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Edit, Edit2, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='px-2 '>
        <div className='container mx-auto space-y-4'>

            <h1 className='text-5xl my-8 '>Blogs</h1>
            <Separator/>
            <Button className='space-x-2'>Add Blog <Plus size={16}/></Button>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <BlogComp/>
              <BlogComp/>
              <BlogComp/>
              <BlogComp/>
            </div>
        </div>
    </div>
  )

}

const BlogComp = (props: Props) => {
  return (
    <Link href={"/dashboard/blogs/0"} className='flex group relative min-h-[300px] hover:bg-[#fff]  hover:scale-[1.01] flex-col gap-4 items-center pb-4 md:pb-8  duration-300'>
        <img className='w-full aspect-square object-cover group-hover:shadow-none duration-300 ' src='https://www.niallscullyphotography.com/wp-content/uploads/2023/10/Michelle-Darragh-681-768x1154.jpg' alt=''></img>
        <h3 className='md:text-xl text-center'>Wedding</h3>
        <h2 className='text-xl md:text-2xl text-center'>Top Wedding Stationary Suppliers</h2>
        <h4 className=' md:text-lg text-muted-foreground text-center'>September 15, 2023</h4>
        <Button variant={"outline"} className='absolute right-0 top-0' size={"icon"}><Edit /></Button>
    </Link>
  )
}

export default page
