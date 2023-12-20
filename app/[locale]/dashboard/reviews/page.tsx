import DialogFormForAll from '@/components/DialogFormForAll'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className='container'>
        <div className='flex gap-2 justify-between items-center'>
            <h1 className='text-5xl my-8 '>Reviews</h1>
            <DialogFormForAll
                for_={"review"}
                inputs={[
                    {type:"Image",title:"Photo"},
                    {type:"text",title:"Name"},
                    {type:"text",title:"Address"},
                    {type:"paragraph",title:"Message"},
                ]}
            ></DialogFormForAll>
        </div>
    </div>
  )
}

export default page