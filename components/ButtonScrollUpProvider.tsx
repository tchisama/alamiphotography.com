"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { ArrowUpIcon } from 'lucide-react';

type Props = {
    children: React.ReactNode
}

const ButtonScrollUpProvider = (props: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    // Show the button when the user scrolls down
    const toggleVisibility = () => {

      if (typeof window !== "undefined") {
            const pageHeight = document.body.scrollHeight;
            if (window.pageYOffset > 300) {
                if (window.pageYOffset > (pageHeight - 1200)) {
                    setIsVisible(false);
                }else{
                    setIsVisible(true);
                }
            }  else {
              setIsVisible(false);
            }
        }
      };
  
    // Scroll to the top when the button is clicked
    const scrollToTop = () => {
      if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      }
    };
  
    useEffect(() => {
      if (typeof window !== "undefined") {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
      }
    }, []);
  
  return (
    <div>
        {props.children}
        <div className={`fixed bottom-4 right-4 duration-300 z-[999] ${isVisible ? 'scale-100' : 'scale-0'}`}>
            <Button size={"icon"} onClick={scrollToTop}><ArrowUpIcon/></Button>
        </div>
    </div>
  )
}

export default ButtonScrollUpProvider