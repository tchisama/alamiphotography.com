"use client"
import useNavbarStore from '@/store/navbarStore'
import React, { useEffect } from 'react'
import NavbarMobile from './NavbarMobile'

function NavbarProvider({children}:{ children:React.ReactNode}) {
  const {open, setOpen} =  useNavbarStore()
  return (
    <div>
      {
        children
      }
      {
        open &&
        <NavbarMobile/>
      }
    </div>
  )
}

export default NavbarProvider