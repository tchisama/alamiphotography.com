"use client"
import { Book, Clapperboard, FolderIcon, Gem, Home, ImageIcon, Languages, Layers2, LinkIcon, LogOut, Mail, MessageCircle, Quote, Scroll, Star, Upload, User } from 'lucide-react'
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
    // {
    //     href: '/dashboard/home',
    //     name: 'Dashboard',
    //     icon:<Home size={iconSize}/>,
    // },
    // {
    //     href: '/dashboard/admin',
    //     name: 'Admins',
    //     icon:<User size={iconSize}/>,
    // },
    {
        href: '/dashboard/orders',
        name: 'Orders',
        icon:<Mail size={iconSize}/>,
    },
    {
        href: '/dashboard/guide',
        name: 'Guide Requests',
        icon:<Book size={iconSize}/>,
    },
    {
        href: '/dashboard/uploads',
        name: 'File System',
        icon:<FolderIcon size={iconSize}/>,
    },
    {
        href: '/dashboard/pages',
        name: 'Images Controller',
        icon:<ImageIcon size={iconSize}/>,
    },
    {
        href: '/dashboard/languages',
        name: 'Texts / Languages',
        icon:<Languages size={iconSize}/>,
    },
    {
        href: '/dashboard/links',
        name: 'Links',
        icon:<LinkIcon size={iconSize}/>,
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
    {
        href: '/dashboard/wedding-stories',
        name: 'Wedding stories',
        icon:<Gem size={iconSize}/>,
    },
    {
        href: '/dashboard/wedding-film',
        name: 'Wedding film',
        icon:<Clapperboard size={iconSize}/>,
    },
]
function DashboardNavbar({}: Props) {
    const currentPath = usePathname();
  return (
    <div className='bg-primary p-4 px-0 font-sans flex flex-col  min-h-screen'>
        <Link href={'/'}>
            <Image width={150} alt='' className='w-[200px] mb-14 mt-8 mx-auto' src={logo}></Image>
        </Link>
        <div className='flex-1 overflow-y-auto'>
        {
            links.map((link) => (
                <Link href={link.href} key={link.href}>
                    <button className={
                        classNames(
                            {
                            'min-w-[300px] font-sans py-3 hover:bg-[#fff2] duration-200 rounded-lg text-white  px-6 flex gap-2 items-center':true,
                            },
                            {
                                'bg-[#fff3]': currentPath !== "/dashboard" ? currentPath.includes(link.href) : currentPath == link.href
                            }
                        )
                    }>{link.icon}{link.name}</button>
                </Link>
            ))
        }
        </div>
        <button onClick={() => {auth.signOut();window.location.reload()}} className=' min-w-[200px] py-3 mt-auto hover:bg-[#fff2] duration-200 rounded-lg text-white  px-6 flex gap-2 items-center' ><LogOut/>Logout</button>
    </div>
  )
}

export default DashboardNavbar