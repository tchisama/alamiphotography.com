import React from 'react'
import { Button } from './ui/button'

type Props = {}

const AlamiSection = (props: Props) => {
  return (
    <div className='bg-[#B9B1A6] py-16'>
        <div className='container mx-auto'>
            <div className='text-6xl text-[#918D82] uppercase font-sans tracking-[0.16em]'>
                {
                    ["affection", "legacy", "adventure", "memory", "intimacy"].map((word, index) => (
                        <h1 key={index} className='font-serif '><span className='text-white space-y-2 font-serif '>{word[0]}</span>{word.slice(1)}</h1>
                    ))
                }
            </div>
            <div className='flex py-8 justify-between gap-8 items-center text-white '>
                <p className='flex-1 max-w-4xl text-lg font-serif'>Alami Photography was established by Alami Mohamed and a team of passionate photographers and videographers. Our goal is not only 
to capture the sincerity and beauty of your weddings but also to document the genuine emotions of the dayin our creations.
<br/><br/>
If our works resonate with you, feel free to reach out to us.
</p>
                <div className='flex items-center gap-4 flex-col'>
                    <h2 className='text-2xl text-[#454643] font-semibold'>let&apos;s get in touch</h2>
                    <Button className='bg-[#454643] uppercase text-white font-sans hover:bg-[#393a37]'>contact us</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AlamiSection