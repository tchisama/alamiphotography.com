import DataDisplayer from '@/components/DataDisplayer'
import DialogFormForAll from '@/components/DialogFormForAll'
import React from 'react'

type Props = {}
const inputs :{
    type:"text"|"paragraph"|"Image"|"number",
    props?: any,
    title:string,
}[] = [
    {type:"Image",props:{type:"3/2"},title:"Snapshot"},
    {type:"text",title:"Name"},
    {type:"text",title:"Video link"},
]

function page({}: Props) {
  return (
    <div className='container'>
        <div className='flex gap-2 justify-between items-center'>
            <h1 className='text-5xl my-8 '>Wedding films</h1>
            <DialogFormForAll
                for_={"wedding film"}
                inputs={inputs}
            ></DialogFormForAll>
        </div>
        <DataDisplayer for_={"wedding films"} inputs={inputs}></DataDisplayer>
    </div>
  )
}

export default page