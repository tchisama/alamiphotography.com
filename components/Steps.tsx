import React from 'react'

type Props = {}

const Steps = (props: Props) => {
  return (
    <div className='w-full gap-10 grid grid-cols-4 my-20 py-24'>
        {
            ["we chat & see if we're a good fit.","you pay a deposit & sign a contract.","i photograph your wedding.","your gallery is delivered."]
            .map((step, index) => (
                <div className='flex border-y py-8 flex-col items-center gap-8' key={index}>
                    <div className='text-2xl font-mono uppercase text-[#a9b9b8]'>step 0{index+1}</div>
                    <div className='text-4xl text-center fontroman text-[#a9b9b8]'>{step}</div>
                </div>
            ))
        }
        <div>
        </div>
    </div>
  )
}


export default Steps