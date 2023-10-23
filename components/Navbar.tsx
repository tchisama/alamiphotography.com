"use client"
import Image from 'next/image'
import React from 'react'
import blackLogo from "@/public/blacklogo.png"
import Link from 'next/link'
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
import { Button } from './ui/button'
import LangButton from './LangButton'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='w-full md:p-4 py-4  items-center flex justify-center md:justify-between'>

        <Link href={"/"}>
            <Image alt='' className=' w-[100px] object-contain md:w-[160px] md:h-[100px]' src={blackLogo} width={160} height={100}></Image>
        </Link>

        <NavigationMenu style={{}} className='hidden md:flex z-50'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={"uppercase px-2"}>Home</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={"uppercase px-2"}>About</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className={"uppercase px-2 bg-transparent"}>PORTFOLIO</NavigationMenuTrigger>
                    <NavigationMenuContent className='z-50 relative'>
                        <div className='w-[250px] bg-[#fafaf8] flex flex-col gap-4 p-8 uppercase'>
                            <Link href="/wedding" legacyBehavior passHref>
                                <NavigationMenuLink className=' '>I - Wedding</NavigationMenuLink>
                            </Link>
                            <Link href="/engaged" legacyBehavior passHref>
                                <NavigationMenuLink className=' '>II - Engaged</NavigationMenuLink>
                            </Link>
                            <Link href="/blog" legacyBehavior passHref>
                                <NavigationMenuLink className=' '>III - Blog</NavigationMenuLink>
                            </Link>
                            <Link href="/editorial" legacyBehavior passHref>
                                <NavigationMenuLink className=' '>IV - Editorial</NavigationMenuLink>
                            </Link>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={"uppercase px-2"}>FOR PHOTOGRAPHERS</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={"uppercase px-2"}>CONTACT</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem >
                    <LangButton/>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                            <Button className={"ml-2"}>ENQUIRE</Button>
                    </Link>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>

    </div>
  )
}

export default Navbar