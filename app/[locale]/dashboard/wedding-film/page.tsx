import DialogFormForAll from '@/components/DialogFormForAll'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className='container'>
        <div className='flex gap-2 justify-between items-center'>
            <h1 className='text-5xl my-8 '>Wedding films</h1>
            <DialogFormForAll
                for_={"wedding film"}
                inputs={[
                    {type:"Image",title:"Snapshot"},
                    {type:"text",title:"Name"},
                    {type:"text",title:"Video link"},
                ]}
            ></DialogFormForAll>
        </div>
    </div>
  )
}

export default page