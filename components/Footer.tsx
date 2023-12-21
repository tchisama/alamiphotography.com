"use client"
import React, { useEffect, useState } from 'react'
import logo from "@/public/blacklogo.png"
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowUpIcon, FacebookIcon, InstagramIcon } from 'lucide-react';
import { Separator } from './ui/separator';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link';
import GetText from './GetText';

type Props = {}
const Footer = (props: Props) => {
    const [up,setUp] = useState(0)
    useEffect(
        ()=>{
            if (typeof window !== "undefined") {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
        },[up]
    )

  return (
    <div className=' '>
        <div className='flex bg-white md:items-center flex-col md:flex-row '>
            <div className='flex-1 gap-4 p-4 h-full flex flex-col justify-center items-center'>
                <Image width={300} src={logo} alt="logo" className='w-[200px] md:w-[300px] m-8'></Image>
                <Separator/>
                <div className='flex gap-3 '>
                    <Link href={"https://www.facebook.com/Alamiphotography/"}>
                        <Button variant={"outline"} size={"icon"} className='rounded-full '><FacebookIcon size={24}/></Button>
                    </Link >
                    <Link href={"https://www.instagram.com/alami_photography/"}>
                        <Button variant={"outline"} size={"icon"} className='rounded-full '><InstagramIcon size={24}/></Button>
                    </Link>
                </div>
            </div>
            <div className='h-[250px] hidden md:block'>
            </div>
            <div className='flex-[2] md:px-4 bg-[#fbf5f1] flex gap-12 md:gap-0 pt-2 md:pt-0 h-[400px] md:items-center flex-col md:flex-row'>
                <div className='flex-1 md:px-24 p-8'>
                    
                <NavigationMenu >
                <NavigationMenuList className='grid grid-cols-2 gap-2 md:gap-12 text-xs font-sans'>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={"uppercase px-2 ml-1 font-sans"}>
                                    <GetText props={{className:"font-sans"}} id="footer_home"/>
                                </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink className={"uppercase px-2 font-sans"}>
                                    <GetText props={{className:"font-sans"}} id="footer_about"/>
                                </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/wedding" legacyBehavior passHref>
                                <NavigationMenuLink className={"uppercase px-2 font-sans"}>
                                    <GetText props={{className:"font-sans"}} id="footer_wedding"/>
                                </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={"uppercase px-2 font-sans"}>
                                    <GetText props={{className:"font-sans"}} id="footer_for photographers"/>
                                </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    {/* <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={"uppercase px-2 font-sans"}>FOR PHOTOGRAPHERS</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem> */}
                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                                <NavigationMenuLink className={"uppercase px-2 font-sans"}>
                                    <GetText props={{className:"font-sans"}} id="footer_contact"/>
                                </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>

                </div>
                <div className='h-[250px] md:block hidden'>
                    <Separator orientation='vertical'/>
                </div>
                <div className='flex font-sans flex-col gap-4 px-4 py-6 items-center md:items=start'>
                    <div className='font-sans text-center md:text-start'>
                        <span className='font-sans'>contact@alamiphotography.com</span><br/>
                        +212-676545984<br/>
                        <span className='uppercase font-sans'>Marrakesh, morocco</span><br/>
                    </div>
                    <Separator/>
                    <Link href={"/contact"}>
                            <Button  className='text-xl  font-sans' size={"lg"}>
                                <GetText props={{className:"font-sans"}} id="footer_Contact me"/>
                            </Button>
                    </Link>
                </div>
            </div>
        </div>
            <div className='flex justify-center md:justify-end my-8 px-4 py-4 md:pt-0 md:px-8'>
                <Button variant={"outline"} className='flex bg-transparent gap-2 text-xl' onClick={()=>setUp(p=>p+1)}><ArrowUpIcon size={20}/></Button>
            </div>
    </div>
  )
}

export default Footer