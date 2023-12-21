import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import GetText from './GetText'
import GetImage from './GetImage'

type Props = {}

function CheckYouLater({}: Props) {
  return (
    <div className='flex md:flex-row my-12 flex-col items-center relative'>
        <GetImage width={900} height={600} name="checkYourDate" className='md:w-[60vw] bg-[#0002] w-full' section="aboutPage"/>
        <div className='bg-primary flex flex-col gap-4 text-background p-8 max-w-[500px] md:absolute left-[55%] top-[50%] md:translate-x-[-50%] md:translate-y-[-50%]'>
            <h1 className='text-3xl '>
              <GetText id="about_check_your_date_paragraph_title"/>
            </h1>
            <p className='pl-8'>
              <GetText id="about_check_your_date_paragraph_content"/>
            </p>
        </div>
        <div className='flex flex-col p-8 gap-4 flex-1 justify-end items-center'>
            <h1 className='text-2xl md:text-5xl fontroman'>
              <GetText id="about_check_your_date_title" props={{className:"text-3xl md:text-5xl fontroman"}} />
            </h1>
            <Link href={"/contact"}>
              <Button className='text-xl md:text-3xl p-8'>
                <GetText id="about_check_your_date_button"/>
              </Button>
            </Link>
        </div>
    </div>
  )
}

export default CheckYouLater