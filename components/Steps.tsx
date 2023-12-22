import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

const Steps = (props: Props) => {
  const t = useTranslations("translation");
  return (
    <div className='w-full gap-10 grid grid-cols-1 md:grid-cols-4 my-20 py-24'>
        {
            new Array(4).fill("")
            .map((step, index) => (
                <div className='flex border-y py-8 flex-col items-center gap-8' key={index}>
                    <div className='text-2xl font-mono uppercase text-[#a9b9b8]'>step 0{index+1}</div>
                    <div className='text-4xl text-center fontroman text-[#a9b9b8]'>{t(`experiencePage_step_${index+1}_content`)}</div>
                </div>
            ))
        }
        <div>
        </div>
    </div>
  )
}


export default Steps