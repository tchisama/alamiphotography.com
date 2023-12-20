import DataDisplayer from '@/components/DataDisplayer'
import DialogFormForAll from '@/components/DialogFormForAll'
import React from 'react'

type Props = {}


const inputs:{
    type:"text"|"paragraph"|"Image"|"number",
    props?: any,
    title:string,
}[] = [
        {type:"Image",props:{type:"2/3"},title:"Photo"},
        {type:"text",title:"Name"},
        {type:"text",title:"Address"},
        {type:"paragraph",title:"Message"},
]

function page({}: Props) {
  return (
    <div className='container'>
        <div className='flex gap-2 justify-between items-center'>
            <h1 className='text-5xl my-8 '>Reviews</h1>
            <DialogFormForAll
                for_={"review"}
                inputs={inputs}
            ></DialogFormForAll>
        </div>
        <DataDisplayer
            for_={"reviews"}
            inputs={inputs}
        ></DataDisplayer>
    </div>
  )
}

export default page