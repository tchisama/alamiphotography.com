import DataDisplayer from '@/components/DataDisplayer'
import DialogFormForAll from '@/components/DialogFormForAll'
import React from 'react'

type Props = {}


const inputs:{
    type:"text"|"paragraph"|"Image"|"number"|"link",
    props?: any,
    title:string,
}[] = [
    {type:"Image",props:{type:"3/2"},title:"Photo"},
    {type:"text",title:"name"},
    {type:"text",title:"wedding type"},
    {type:"link",title:"full story link"},
    {type:"paragraph",title:"content"},
]

function page({}: Props) {
  return (
    <div className='container'>
        <div className='flex gap-2 justify-between items-center'>
            <h1 className='text-5xl my-8 '>Wedding Stories</h1>
            <DialogFormForAll
                for_={"wedding story"}
                inputs={inputs}
            ></DialogFormForAll>
        </div>
        <DataDisplayer  for_={"wedding storys"} inputs={inputs}></DataDisplayer>
    </div>
  )
}

export default page