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
import { CiMenuFries } from "react-icons/ci";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
type Props = {}


function Navbar({}: Props) {
    const {setOpen} = useNavbarStore()
    const t = useTranslations('translation');

  useEffect(()=>{
    setOpen(false)
  },[setOpen])
  return (

    <>
    <div className='w-full md:p-4 py-4 md:py-6 items-center flex justify-between  md:justify-between'>
        <Link href={"/"}>
            <Image alt='' className=' w-[100px] object-contain md:w-[250px] ' src={blackLogo} width={160} height={100}></Image>
        </Link>
        <Button size={"icon"} onClick={()=>setOpen(true)} variant={"ghost"} className='block md:hidden'><CiMenuFries size={24}/></Button>

        <NavigationMenu style={{}} className='hidden flex-1 md:flex text-xl z-50'>
            <NavigationMenuList className='flex gap-6 text-lg'>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={"uppercase px-2"}>{t('navbar_home')}</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={"uppercase px-2"}>{t('navbar_about')}</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <Popover>
                    <PopoverTrigger>
                            <NavigationMenuLink className={"uppercase px-2"}>{t('navbar_portfolio')}</NavigationMenuLink>
                    </PopoverTrigger>
                    <PopoverContent className='p-0 w-[250px]'>
                        <div className='w-full  bg-primary text-background flex flex-col gap-6 p-8 uppercase'>
                            <Link href="/wedding" legacyBehavior passHref>
                                <NavigationMenuLink className='text-xs flex justify-center tracking-wider '>I - {t("navbar_wedding stories")}</NavigationMenuLink>
                            </Link>
                            <Link href="/wedding-film" legacyBehavior passHref>
                                <NavigationMenuLink className=' text-xs flex justify-center tracking-wider '>II - {t("navbar_wedding film")}</NavigationMenuLink>
                            </Link>
                            <Link href="/blog" legacyBehavior passHref>
                                <NavigationMenuLink className=' text-xs flex justify-center tracking-wider '>III - {t("navbar_blog")}</NavigationMenuLink>
                            </Link>
                            {/* <Link href="/editorial" legacyBehavior passHref>
                                <NavigationMenuLink className=' '>IV - Editorial</NavigationMenuLink>
                            </Link> */}
                        </div>
                    </PopoverContent>
                </Popover>


                <NavigationMenuItem>
                    <Link href="/for-photographers" legacyBehavior passHref>
                            <NavigationMenuLink className={"uppercase px-2"}>{t("navbar_for photographers")}</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={"uppercase px-2"}>{t('navbar_contact')}</NavigationMenuLink>
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
                            <Button className={"ml-2 uppercase text-lg"}>{t("navbar_enquire")}</Button>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>



    </div>
    </>
  )
}

export default Navbar