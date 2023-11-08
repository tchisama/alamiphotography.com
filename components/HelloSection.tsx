import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

type Props = {
  homepage?:boolean
}

function HelloSection({homepage=false}: Props) {
  return (
    <div className='flex gap-6 my-24 flex-col-reverse md:flex-row items-center justify-between'>
        <div className='flex  flex-col items-start gap-8'>
            <h1 className='text-4xl md:text-7xl font-light'>
                Hello!<br/>
                Thanks for stopping by
            </h1>
            <p className='text-md md:text-2xl fontcharm leading-relaxed md:max-w-4xl'>
              Alami Photography is a Marrakesh-based wedding photography studio with over 7 years of experience in professional photography, operating throughout Morocco. <br/>
              Our work has been featured in VOGUE, MyWed, Together Journal, and various online publications. If our work resonates with you, please don&apos;t hesitate to contact us. <br/>
              We are passionate about capturing timeless moments in every image we create. We believe that a great photograph should evoke an emotional response in the viewer. We aim to tell stories through images rather than words. <br/>
              Our approach is to document your love story in a creative way, capturing not only the magnificent moments but also the special and dear snippets of your day. We present your story in an artistic, expressive manner, allowing you to look back in awe years later. Our goal is to transport you back to those unique emotions from your big day long after it has passed. <br/>
            </p>
            {
              homepage &&
              <Link href={"/about"}>
                <Button className='text-xl' size={'lg'}>Learn More</Button>
              </Link>
            }
            <p className='text-6xl text-end w-full fontsign'>Alami</p>
        </div>
        <img className='espect-[3/4] w-full max-h-[50vh] md:max-h-[70vh] max-w-[500px] object-cover  rounded-lg ' src={"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F99120244Alami%20About.jpg?alt=media&token=2d480785-0b46-48c3-80db-2f68966712ce"}></img>
    </div>
  )
}

export default HelloSection