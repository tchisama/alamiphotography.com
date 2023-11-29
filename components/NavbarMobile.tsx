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
type Props = {}


function NavbarMobile({}: Props) {
    const {setOpen} = useNavbarStore()
  return (
        <motion.div 
        initial={{opacity:0,scale:1.2}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.4}}
        className='bg-[#a9b9b8] py-8 px-4 items-center flex-col fixed z-50 flex md:hidden top-0 -left-0 w-screen h-screen'>
            <Button onClick={()=>setOpen(false)} variant={"ghost"} size={"icon"} className='my-8 text-white'><X/></Button>
            <ul className='w-full uppercase text-white'>
                <li className='flex justify-center'>
                    <Link className='py-3 text-lg w-full text-center' href={"/"}>Home</Link>
                </li>
                <Separator className='opacity-50'/>
                <li className='flex justify-center'>
                    <Link className='py-3 text-lg w-full text-center' href={"/about"}>About</Link>
                </li>
                <Separator className='opacity-50'/>
                <li>
                    <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-center uppercase text-lg flex justify-center'>Portfolio</AccordionTrigger>
                        <AccordionContent>
                            <ul>
                                <li className='flex justify-center'>
                                    <Link className='py-3  w-full text-center' href={"/wedding"}>wedding stories</Link>
                                </li>
                                <li className='flex justify-center'>
                                    <Link className='py-3  w-full text-center' href={"/wedding-film"}>wedding film</Link>
                                </li>
                                <li className='flex justify-center'>
                                    <Link className='py-3  w-full text-center' href={"/blog"}>Blog</Link>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </li>
                <li className='flex justify-center'>
                    <Link className='py-3 text-lg w-full text-center' href={"/"}>FOR PHOTOGRAPHERS</Link>
                </li>
                <Separator className='opacity-50'/>
                <li className='flex justify-center'>
                    <Link className='py-3 text-lg w-full text-center' href={"/contact"}>contact</Link>
                </li>
            </ul>
        </motion.div>
  )
}

export default NavbarMobile