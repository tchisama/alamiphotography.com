import DialogFormForAll from '@/components/DialogFormForAll'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className='container'>
        <div className='flex gap-2 justify-between items-center'>
            <h1 className='text-5xl my-8 '>Wedding Stories</h1>
            <DialogFormForAll
                for_={"wedding story"}
                inputs={[
                    {type:"Image",title:"Photo"},
                    {type:"text",title:"name"},
                    {type:"text",title:"wedding type"},
                    {type:"text",title:"full story link"},
                    {type:"paragraph",title:"content"},
                ]}
            ></DialogFormForAll>
        </div>
    </div>
  )
}

export default page