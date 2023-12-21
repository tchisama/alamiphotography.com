import DataDisplayer from '@/components/DataDisplayer'
import DialogFormForAll from '@/components/DialogFormForAll'
import React from 'react'

type Props = {}


const inputs:{
    type:"text"|"paragraph"|"Image"|"number"|"link"|"email",
    props?: any,
    title:string,
}[] = [
    {type:"text",title:"name"},
    {type:"email",title:"email"},
    {type:"paragraph",title:"message"},
]

function page({}: Props) {
  return (
    <div className='container'>
        <div className='flex gap-2 justify-between items-center'>
            <h1 className='text-5xl my-8 '>Guide Requests</h1>
            <DialogFormForAll
                for_={"Guide"}
                inputs={inputs}
            ></DialogFormForAll>
        </div>
        <DataDisplayer grid={true} for_={"Guides"} inputs={inputs}/>
    </div>
  )
}

export default page