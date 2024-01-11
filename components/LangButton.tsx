"use client"
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import {usePathname} from 'next-intl/client';  

type Props = {}

function LangButton({}: Props) {
  const t = useTranslations('lang');
  const pathName = usePathname();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button size={"icon"} variant={"outline"} className={"ml-2 md:p-6 flex items-center justify-center md:text-xl uppercase"}>{t('local')}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem asChild className='text-xl'>
              <Link href={"/en"+pathName} locale="en">
                
                English
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild  className='text-xl'>
              <Link href={"/fr"+pathName} locale="fr">
                French
              </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default LangButton