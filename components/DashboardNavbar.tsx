"use client"
import { Book, FolderIcon, Home, ImageIcon, Languages, Layers2, LogOut, Mail, MessageCircle, Quote, Scroll, Star, Upload, User } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import logo from "@/public/logo pictime W.png"
import Image from 'next/image'
import { auth } from '@/firebase'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
type Props = {}

const iconSize = 20
const links = [
    {
        href: '/dashboard',
        name: 'Dashboard',
        icon:<Home size={iconSize}/>,
    },
    // {
    //     href: '/dashboard/admin',
    //     name: 'Admins',
    //     icon:<User size={iconSize}/>,
    // },
    {
        href: '/dashboard/uploads',
        name: 'File System',
        icon:<FolderIcon size={iconSize}/>,
    },
    {
        href: '/dashboard/orders',
        name: 'Orders',
        icon:<Mail size={iconSize}/>,
    },
    {
        href: '/dashboard/Guide',
        name: 'Guide Requests',
        icon:<Book size={iconSize}/>,
    },
    {
        href: '/dashboard/pages',
        name: 'Images',
        icon:<ImageIcon size={iconSize}/>,
    },
    {
        href: '/dashboard/languages',
        name: 'Languages',
        icon:<Languages size={iconSize}/>,
    },
    {
        href: '/dashboard/reviews',
        name: 'Reviews',
        icon:<Star size={iconSize}/>,
    },
    {
        href: '/dashboard/q-and-a',
        name: 'Q and A',
        icon:<Quote size={iconSize}/>,
    },
    {
        href: '/dashboard/blogs',
        name: 'Blogs',
        icon:<Scroll size={iconSize}/>,
    },
]
function DashboardNavbar({}: Props) {
    const currentPath = usePathname();
  return (
    <div className='bg-primary p-4 font-sans flex flex-col  min-h-screen'>
        <Link href={'/'}>
            <Image width={150} alt='' className='w-[150px] mb-24 mt-8 mx-auto' src={logo}></Image>
        </Link>
        {
            links.map((link) => (
                <Link href={link.href} key={link.href}>
                    <button className={
                        classNames(
                            {
                            'min-w-[200px] font-sans py-3 hover:bg-[#fff2] duration-200 rounded-lg text-white  px-6 flex gap-2 items-center':true,
                            },
                            {
                                'bg-[#fff3]': currentPath === link.href
                            }
                        )
                    }>{link.icon}{link.name}</button>
                </Link>
            ))
        }
        <button onClick={() => {auth.signOut();window.location.reload()}} className=' min-w-[200px] py-3 mt-auto hover:bg-[#fff2] duration-200 rounded-lg text-white  px-6 flex gap-2 items-center' ><LogOut/>Logout</button>
    </div>
  )
}

export default DashboardNavbar