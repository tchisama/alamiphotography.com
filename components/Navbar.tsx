"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
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
import { Menu } from 'lucide-react'
import useNavbarStore from '@/store/navbarStore'
import { useTranslations } from 'next-intl'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
type Props = {}

function Navbar({}: Props) {
    const {setOpen} = useNavbarStore()
    const t = useTranslations('navbar');

  useEffect(()=>{
    setOpen(false)
  },[setOpen])
  return (

    <>
    <div className='w-full md:p-4 py-4 md:py-6 items-center flex justify-between  md:justify-between'>
        <Link href={"/"}>
            <Image alt='' className=' w-[100px] object-contain md:w-[250px] ' src={blackLogo} width={160} height={100}></Image>
        </Link>
        <Button size={"icon"} onClick={()=>setOpen(true)} variant={"ghost"} className='block md:hidden'><Menu/></Button>

        <NavigationMenu style={{}} className='hidden flex-1 md:flex text-xl z-50'>
            <NavigationMenuList className='flex gap-6 text-lg'>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={"uppercase px-2"}>{t('home')}</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={"uppercase px-2"}>{t('about')}</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <Popover>
                    <PopoverTrigger>
                            <NavigationMenuLink className={"uppercase px-2"}>{t('portfolio')}</NavigationMenuLink>
                    </PopoverTrigger>
                    <PopoverContent className='p-0 w-[250px]'>
                        <div className='w-full  bg-primary text-background flex flex-col gap-6 p-8 uppercase'>
                            <Link href="/wedding" legacyBehavior passHref>
                                <NavigationMenuLink className='text-xs flex justify-center tracking-wider '>I - Wedding stories</NavigationMenuLink>
                            </Link>
                            <Link href="/wedding-film" legacyBehavior passHref>
                                <NavigationMenuLink className=' text-xs flex justify-center tracking-wider '>II - WEDDING FILM</NavigationMenuLink>
                            </Link>
                            <Link href="/blog" legacyBehavior passHref>
                                <NavigationMenuLink className=' text-xs flex justify-center tracking-wider '>III - Blog</NavigationMenuLink>
                            </Link>
                            {/* <Link href="/editorial" legacyBehavior passHref>
                                <NavigationMenuLink className=' '>IV - Editorial</NavigationMenuLink>
                            </Link> */}
                        </div>
                    </PopoverContent>
                </Popover>


                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={"uppercase px-2"}>{t("for photographers")}</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={"uppercase px-2"}>{t('contact')}</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu className='hidden md:flex '>
            <NavigationMenuList>
                <NavigationMenuItem >
                    <LangButton />
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                            <Button className={"ml-2 uppercase text-lg"}>{t("enquire")}</Button>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>



    </div>
    </>
  )
}

export default Navbar