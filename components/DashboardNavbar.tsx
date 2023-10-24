import { MessageCircle, Upload, User } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import logo from "@/public/logo pictime W.png"
import Image from 'next/image'
type Props = {}

const iconSize = 20
const links = [
    {
        href: '/dashboard/admin',
        name: 'Admin',
        icon:<User size={iconSize}/>,
    },
    {
        href: '/dashboard/upload',
        name: 'Uploads',
        icon:<Upload size={iconSize}/>,
    },
    {
        href: '/dashboard/messages',
        name: 'messages',
        icon:<MessageCircle size={iconSize}/>,
    },
]
function DashboardNavbar({}: Props) {
  return (
    <div className='bg-primary p-4 flex flex-col gap-2 min-h-screen'>
        <Image width={150} alt='' className='w-[150px] mb-24 mt-8 mx-auto' src={logo}></Image>
        {
            links.map((link) => (
                <Link href='/dashboard/admin' key={link.href}>
                    <button className=' min-w-[200px] py-3 rounded-lg text-white  px-6 flex gap-2 items-center'>{link.icon}{link.name}</button>
                </Link>
            ))
        }
    </div>
  )
}

export default DashboardNavbar