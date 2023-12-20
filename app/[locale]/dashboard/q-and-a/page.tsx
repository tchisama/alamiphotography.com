import DataDisplayer from '@/components/DataDisplayer'
import DialogFormForAll from '@/components/DialogFormForAll'
import React from 'react'

type Props = {}


const inputs:{
    type:"text"|"paragraph"|"Image"|"number",
    props?: any,
    title:string,
}[] = [
    {type:"text",title:"question"},
    {type:"paragraph",title:"answer"},
]

function page({}: Props) {
  return (
    <div className='container'>
        <div className='flex gap-2 justify-between items-center'>
            <h1 className='text-5xl my-8 '>Questions and Answers</h1>
            <DialogFormForAll
                for_={"Question and Answer"}
                inputs={inputs}
            ></DialogFormForAll>
        </div>
        <DataDisplayer grid={true} for_={"Question and Answers"} inputs={inputs}/>
    </div>
  )
}

export default page