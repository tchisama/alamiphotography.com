import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import GetText from './GetText'

type Props = {
  homepage?:boolean
}

function HelloSection({homepage=false}: Props) {
  const t = useTranslations('translation');
  return (
    <div className={'flex gap-6 my-24 flex-col-reverse items-center justify-between '+(homepage?'md:flex-row':'md:flex-row-reverse')}>
        <div className='flex  flex-col items-start gap-8' >
            <h1 className='text-4xl md:text-7xl font-light text-center md:text-start'>
              {
                t('hello_title')
              }
            </h1>
            <p className='text-sm md:text-xl space-y-6 leading-relaxed md:max-w-4xl text-center md:text-start'>
              {
                homepage?
                <GetText id="about_hello_content"/>
                :
                <>
                <GetText id="about_hello_content"/>
                </>
              }
            </p>
            <p className='text-4xl md:text-6xl text-end w-full rotate-2 fontsign'>Alami</p>
            {
              homepage &&
              <Link href={"/about"}>
                <Button className='text-xl' size={'lg'}><GetText id="hello_Button"/></Button>
              </Link>
            }
        </div>
        <Image width={400} height={600} alt='' className='aspect-[2/3] bg-[#0002]  w-full max-w-[500px] object-cover  rounded-lg ' src={homepage?"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F99120244Alami%20About.jpg?alt=media&token=2d480785-0b46-48c3-80db-2f68966712ce":"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F44609627About%20page%202.jpg?alt=media&token=c08a460c-0320-4229-9e27-a38dea422bda"}></Image>
    </div>
  )
}

export default HelloSection