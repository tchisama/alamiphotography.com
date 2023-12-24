import React from 'react'

type Props = {
    from:string
    children?: (data:any) => React.ReactNode
}

export default function GetData({from,children}: Props) {
    if(children === undefined) return "hello world : "+ from
    return children({title:"hello world : "+ from})
}