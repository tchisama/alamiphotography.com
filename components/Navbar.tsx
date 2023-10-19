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
    <div className='w-full md:p-4 py-4  items-center flex justify-between'>
        <Link href={"/"}>
            <Image alt='' className=' w-[100px] object-contain md:w-[160px] md:h-[100px]' src={blackLogo} width={160} height={100}></Image>
        </Link>
        <NavigationMenu style={{}} className='hidden md:flex'>
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