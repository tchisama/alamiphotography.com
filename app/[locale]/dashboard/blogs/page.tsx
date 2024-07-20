"use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { db } from '@/firebase'
import { Timestamp, addDoc, collection, getDocs } from 'firebase/firestore'
import { Edit, Edit2, Plus } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'

type Props = {}


type Blog = {
  id: string,
  title: string,
  date: Timestamp,
  category: string,
  content : {
    type: string,
    data: string
  }[]
}


const Page = (props: Props) => {
  const [blogs , setBlogs] = React.useState([])
  useEffect(
    () => {
      getDocs(collection(db, 'blogs')).then((querySnapshot) => {
        let data:any = []
        querySnapshot.forEach((doc) => {
          data.push({...doc.data(), id: doc.id})
        });
        setBlogs(data)
      })
    },[]
  )
  return (
    <div className='px-2 '>
        <div className='container mx-auto space-y-4'>

            <h1 className='text-5xl my-8 '>Blogs</h1>
            <Separator/>
            <Button onClick={
            ()=>{
            addDoc(collection(db, 'blogs'), {
              title: 'New Blog',
              date: Timestamp.now(),
              category: 'Wedding',
              content:[]
          })}
        } className='space-x-2'>Add Blog <Plus size={16}/></Button>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {
            blogs.map((blog:Blog, i) => {
              return <BlogComp key={i} blog={blog} />
            })
          }
            </div>
        </div>
    </div>
  )
}


const BlogComp = ({blog}: {blog:Blog}) => {
  return (
    <Link href={"/dashboard/blogs/"+blog.id} className='flex group relative min-h-[300px] hover:bg-[#fff]  hover:scale-[1.01] flex-col gap-4 items-center pb-4 md:pb-8  duration-300'>
        <img className='w-full aspect-square object-cover group-hover:shadow-none duration-300 ' src='https://www.niallscullyphotography.com/wp-content/uploads/2023/10/Michelle-Darragh-681-768x1154.jpg' alt=''></img>
        <h3 className='md:text-xl text-center'>{blog.category}</h3>
        <h2 className='text-xl md:text-2xl text-center'>{blog.title}</h2>
        <h4 className=' md:text-lg text-muted-foreground text-center'>{blog.date.toDate().toDateString()}</h4>
        <Button variant={"outline"} className='absolute right-0 top-0' size={"icon"}><Edit /></Button>
    </Link>
  )
}

export default Page
