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
  

type Props = {}

function LangButton({}: Props) {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button size={"icon"} variant={"outline"} className={"ml-2"}>En</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Languages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>French</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default LangButton