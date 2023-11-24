import React from 'react'

type Props = {}

const Steps = (props: Props) => {
  return (
    <div className='w-full gap-2 grid grid-cols-4'>
        {
            ["we chat & see if we're a good fit.","you pay a deposit & sign a contract.","i photograph your wedding.","your gallery is delivered."]
            .map((step, index) => (
                <div className='flex flex-col items-center gap-2' key={index}>
                    <div className='text-8xl fontroman text-[#a9b9b8]'>{index+1}</div>
                    <div className='text-md fontcharm text-[#a9b9b8]'>{step}</div>
                </div>
            ))
        }
        <div>
            <div>STEP 01</div>
            <div>we chat & see if we{"'"}re a good fit.</div>
        </div>
    </div>
  )
}


export default Steps