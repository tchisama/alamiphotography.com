import React from 'react'
import logo from "@/public/blacklogo.png"
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
type Props = {}

function page({}: Props) {
  return (
    <div className='min-h-screen flex items-center justify-center bg-primary'>
        <div className='w-full flex-1 gap-2 max-w-xl p-8 flex flex-col shadow-xl items-center rounded-3xl  bg-[#fafaf8]'>
            <Image src={logo} alt='' className='mb-8' width={200}></Image>
            <div className='w-full'>
                <h4 className='my-2'>UserName</h4>
                <Input></Input>
            </div>
            <div className='w-full'>
                <h4 className='my-2'>Password</h4>
                <Input></Input>
            </div>
            <Button className='w-full mt-4 text-lg flex gap-2'>Login<LogIn size={20}/></Button>
        </div>
    </div>
  )
}

export default page