import ButtonScrollUpProvider from '@/components/ButtonScrollUpProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter,WindSong,Cormorant_Garamond,Playfair_Display  } from 'next/font/google'
import NavbarProvider from '@/components/NavbarProvider'
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import { Toaster } from "@/components/ui/toaster"
import LangProvider from '@/components/LangProvider'
import Head from 'next/head'

// import "https://player.vimeo.com/api/player.js"



const inter = Inter({ subsets: ['latin'] })
const dancing = WindSong({ 
  weight:['400','500'],
  subsets:["latin"],
  variable:"--font-dancing",
})
const playfair = Playfair_Display({
  subsets:["latin"],
  weight:['400','700'],
  variable:"--font-playfair",
})
const charm = Cormorant_Garamond({ 
  subsets:["latin"],
  weight:['400','700'],
  variable:"--font-charm",
})
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'fr'}];
}
export const metadata: Metadata = {
  title: 'alamipohotography',
  description: 'Capture every nuance of your special day with timeless beauty and emotion as your premier Marrakech wedding photographer and videographer',
}

export default async function RootLayout({
  children,
  params:{locale}
}: {
  children: React.ReactNode,
  params:{locale:string}
}) {
  // let messages;
  // try {
  //   messages = (await import(`../../messages/${locale}.json`)).default;
  // } catch (error) {
  //   notFound();
  // }
  return (
    <html lang={locale}>
      <head>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png"/>
      </head>
      <body className={` ${charm.variable} ${dancing.variable} ${playfair.variable}`}>
      <LangProvider locale={locale}>
        <div className='text-gray-700 tracking-wider bg-[#fafaf8]'>
          <ButtonScrollUpProvider>
            <NavbarProvider>
            {children}
            </NavbarProvider>
          </ButtonScrollUpProvider>
        </div>
        <Toaster />
      </LangProvider>
      </body>
    </html>
  )
}
