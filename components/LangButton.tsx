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
  const t = useTranslations('Global');
  const pathName = usePathname();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button size={"icon"} variant={"outline"} className={"ml-2 text-lg uppercase"}>{t('lang')}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Languages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={"/en"+pathName} locale="en">
                English
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={"/fr"+pathName} locale="fr">
              French
              </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default LangButton