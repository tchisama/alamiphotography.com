import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

type Props = {
  homepage?:boolean
}

function HelloSection({homepage=false}: Props) {
  return (
    <div className={'flex gap-6 my-24 flex-col-reverse items-center justify-between '+(homepage?'md:flex-row':'md:flex-row-reverse')}>
        <div className='flex  flex-col items-start gap-8' >
            <h1 className='text-4xl md:text-7xl font-light'>
                Hello!<br/>
                Thanks for stopping by
            </h1>
            <p className='text-md md:text-xl space-y-6 leading-relaxed md:max-w-4xl'>
              {
                homepage?
                <>
                <p>Alami Photography is a Marrakesh-based wedding photography studio with over 7 years of experience in professional photography, operating throughout Morocco.</p>

                <p>Our work has been featured in VOGUE, MyWed, Together Journal, and various online publications. If our work resonates with you, please don&apos;t hesitate to contact us.</p>

                <p>We are passionate about capturing timeless moments in every image we create. We believe that a great photograph should evoke an emotional response in the viewer. We aim to tell stories through images rather than words.</p>

                <p>Our approach is to document your love story in a creative way, capturing not only the magnificent moments but also the special and dear snippets of your day. We present your story in an artistic, expressive manner, allowing you to look back in awe years later.</p>

                <p>Our goal is to transport you back to those unique emotions from your big day long after it has passed. If our approach aligns with your vision, we welcome the opportunity to collaborate and create lasting memories for you.</p>

                </>
                :
                <>
                <p>Over the last 7 years, Alami Photography has been documenting weddings for Marrakesh’s newlyweds with a modern yet natural wedding photography approach.</p>

                <p>Alami Photography’s work is elegant, natural, timeless, and captures the couples under their most honest side. The team has been named one of the Best Wedding Photographers in Morocco and has been published in wedding magazines and blogs such as VOGUE, MY WED, and many more.</p>

                <p>At Alami Photography, we believe in the importance of craft in the work, and serving a limited number of weddings each year. Alami Photography&apos;s team consists of some of Morocco’s finest wedding photographers and videographers who work hard to achieve excellence both in the services and products that they deliver to the clients.</p>

                <p>We provide a wide range of wedding and engagement packages that cater to all different needs. If you have any special requirements or requests, please let us know as we are here for you.</p>
                </>
              }
            </p>
            <p className='text-6xl text-end w-full rotate-2 fontsign'>Alami</p>
            {
              homepage &&
              <Link href={"/about"}>
                <Button className='text-xl' size={'lg'}>Learn More</Button>
              </Link>
            }
        </div>
        <img className='espect-[2/3] w-full max-h-[50vh] md:max-h-[70vh] max-w-[500px] object-cover  rounded-lg ' src={"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F99120244Alami%20About.jpg?alt=media&token=2d480785-0b46-48c3-80db-2f68966712ce"}></img>
    </div>
  )
}

export default HelloSection