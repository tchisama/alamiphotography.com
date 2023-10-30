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

type Props = {}
const images = [
  "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
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
    <div className='py-20 '>
        <div className='gap-1 hidden md:grid'  style={{gridTemplateColumns:"repeat("+images.length+",1fr)"}}>
            {
                images.map((image, index) => (
                    <img src={image} key={index} className='flex-1 rounded-md object-cover w-full h-[200px]'></img>
                ))
            }
        </div>
        <div className='flex md:items-center flex-col md:flex-row'>
            <div className='flex-1 gap-4 h-full flex flex-col justify-center items-center'>
                <Image width={300} src={logo} alt="logo"></Image>
                <Separator/>
                <div className='flex gap-3 '>
                    <Button variant={"outline"} size={"icon"} className='rounded-full '><FacebookIcon size={24}/></Button>
                    <Button variant={"outline"} size={"icon"} className='rounded-full '><InstagramIcon size={24}/></Button>
                </div>
            </div>
            <div className='h-[250px] hidden md:block'>
                <Separator orientation='vertical'/>
            </div>
            <div className='flex-[2] md:px-4 flex gap-12 md:gap-0 pt-12 md:pt-0 h-[400px] md:items-center flex-col md:flex-row'>
                <div className='flex-1'>
                    
                <NavigationMenu >
                <NavigationMenuList className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={"uppercase px-2 ml-1"}>Home</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={"uppercase px-2"}>About</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={"uppercase px-2"}>PORTFOLIO</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={"uppercase px-2"}>FOR PHOTOGRAPHERS</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={"uppercase px-2"}>CONTACT</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>

                </div>
                <div className='h-[250px] md:block hidden'>
                    <Separator orientation='vertical'/>
                </div>
                <div className='flex flex-col gap-4 px-4'>
                    <div>
                        info@niallscullyphotography.com<br/>
                        087-0671977<br/>
                        WICKLOW, IRELAND<br/>
                    </div>
                    <Separator/>
                    <Button  className='text-xl' size={"lg"}>Contact me </Button>
                </div>
            </div>
        </div>
            <div className='flex justify-end px-4 pt-4 md:pt-0 md:px-8'>
                <Button variant={"outline"} className='flex gap-2 text-xl' onClick={()=>setUp(p=>p+1)}>scroll up<ArrowUpIcon size={20}/></Button>
            </div>
    </div>
  )
}

export default Footer