"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { ArrowUpIcon } from 'lucide-react';

type Props = {
    children: React.ReactNode
}

const ButtonScrollUpProvider = (props: Props) => {
    const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
        {props.children}
        <div className={`fixed bottom-4 right-4 duration-300 z-[999] ${isVisible ? 'scale-100' : 'scale-0'}`}>
            <Button size={"icon"} onClick={()=>{}}><ArrowUpIcon/></Button>
        </div>
    </div>
  )
}

export default ButtonScrollUpProvider