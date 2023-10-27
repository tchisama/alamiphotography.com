"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

type Props = {
    children: React.ReactNode
}

const ButtonScrollUpProvider = (props: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    // Show the button when the user scrolls down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Scroll to the top when the button is clicked
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
  return (
    <div>
        {props.children}
        <div className={`absolute bottom-4 right-4 z-[999] ${isVisible ? 'flex' : 'hidden'}`}>
            <Button onClick={scrollToTop}>Scroll to Top</Button>
        </div>
    </div>
  )
}

export default ButtonScrollUpProvider