import React from 'react'

import Logo from "@/public/logo pictime W.png"
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from 'next/link'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { X } from 'lucide-react'
import useNavbarStore from '@/store/navbarStore'
import {motion} from "framer-motion"
import { useTranslations } from 'next-intl'
type Props = {}


function NavbarMobile({}: Props) {
    const {setOpen} = useNavbarStore()
    const t = useTranslations('translation');
  return (
        <motion.div 
        initial={{opacity:0,scale:1.2}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.4}}
        className='bg-[#a9b9b8] py-8 px-4 items-center flex-col fixed z-50 flex md:hidden top-0 -left-0 w-screen h-screen'>
            <Button onClick={()=>setOpen(false)} variant={"ghost"} size={"icon"} className='my-8 text-white'><X/></Button>
            <ul className='w-full uppercase text-white'>
                <li className='flex justify-center'>
                    <Link className='py-3 text-lg w-full text-center' href={"/"}>{t('navbar_home')}</Link>
                </li>
                <Separator className='opacity-50'/>
                <li className='flex justify-center'>
                    <Link className='py-3 text-lg w-full text-center' href={"/about"}>{t('navbar_about')}</Link>
                </li>
                <Separator className='opacity-50'/>
                <li>
                    <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-center uppercase text-lg flex justify-center'>{t('navbar_portfolio')}</AccordionTrigger>
                        <AccordionContent>
                            <ul>
                                <li className='flex justify-center'>
                                    <Link className='py-3  w-full text-center' href={"/wedding"}>{t('navbar_wedding stories')}</Link>
                                </li>
                                <li className='flex justify-center'>
                                    <Link className='py-3  w-full text-center' href={"/wedding-film"}>{t('navbar_wedding film')}</Link>
                                </li>
                                <li className='flex justify-center'>
                                    <Link className='py-3  w-full text-center' href={"/blog"}>{t('navbar_blog')}</Link>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </li>
                <li className='flex justify-center'>
                    <Link className='py-3 text-lg w-full text-center' href={"/"}>{t("navbar_for photographers")}</Link>
                </li>
                <Separator className='opacity-50'/>
                <li className='flex justify-center'>
                    <Link className='py-3 text-lg w-full text-center' href={"/contact"}>{t("navbar_contact")}</Link>
                </li>
            </ul>
        </motion.div>
  )
}

export default NavbarMobile