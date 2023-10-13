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

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='w-full p-4  items-center flex justify-between'>
        <Image alt='' src={blackLogo} width={160} height={100}></Image>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={"uppercase px-2"}>Home</NavigationMenuLink>
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
                <NavigationMenuItem>
                            <Button className={"ml-2"}>ENQUIRE</Button>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>

    </div>
  )
}

export default Navbar