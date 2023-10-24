import { Home, Layers2, LogOut, MessageCircle, Upload, User } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import logo from "@/public/logo pictime W.png"
import Image from 'next/image'
type Props = {}

const iconSize = 20
const links = [
    {
        href: '/dashboard',
        name: 'Dashboard',
        icon:<Home size={iconSize}/>,
    },
    {
        href: '/dashboard/admin',
        name: 'Admins',
        icon:<User size={iconSize}/>,
    },
    {
        href: '/dashboard/uploads',
        name: 'Uploads',
        icon:<Upload size={iconSize}/>,
    },
    {
        href: '/dashboard/messages',
        name: 'Messages',
        icon:<MessageCircle size={iconSize}/>,
    },
    {
        href: '/dashboard/pages',
        name: 'Pages',
        icon:<Layers2 size={iconSize}/>,
    },
]
function DashboardNavbar({}: Props) {
  return (
    <div className='bg-primary p-4 flex flex-col gap-2 min-h-screen'>
        <Image width={150} alt='' className='w-[150px] mb-24 mt-8 mx-auto' src={logo}></Image>
        {
            links.map((link) => (
                <Link href={link.href} key={link.href}>
                    <button className=' min-w-[200px] py-3 hover:bg-[#fff2] duration-200 rounded-lg text-white  px-6 flex gap-2 items-center'>{link.icon}{link.name}</button>
                </Link>
            ))
        }
        <button className=' min-w-[200px] py-3 mt-auto hover:bg-[#fff2] duration-200 rounded-lg text-white  px-6 flex gap-2 items-center'><LogOut/>Logout</button>
    </div>
  )
}

export default DashboardNavbar