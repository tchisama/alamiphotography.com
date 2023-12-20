import ChangeTextTo from '@/components/ChangeTextTo'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className='container'>
        <h1 className='text-5xl my-8 '>Links Controller</h1>
        <div className='grid grid-cols-2 gap-2'>
          {
            ["email","whatsapp","number_1","number_2","instagram","facebook","twitter","youtube","pinterest","address"].map((link,index) => {
              return(
              <div className='relative py-4 border px-4' key={index}>
                <h3 className='text-2xl mb-2 capitalize font-bold'>{link}</h3>
                <ChangeTextTo section={"links"} text={link} ></ChangeTextTo>
              </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default page