import DialogFormForAll from '@/components/DialogFormForAll'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className='container'>
        <div className='flex gap-2 justify-between items-center'>
            <h1 className='text-5xl my-8 '>Questions and Answers</h1>
            <DialogFormForAll
                for_={"Question and Answer"}
                inputs={[
                    {type:"text",title:"question"},
                    {type:"paragraph",title:"answer"},
                ]}
            ></DialogFormForAll>
        </div>
    </div>
  )
}

export default page