"use client"
import { collection, query, where, getDocs } from "firebase/firestore";
import { MessagesTable } from '@/components/MessagesTable'
import { Button } from '@/components/ui/button'
import React from 'react'
import { db } from "@/firebase";
import { Message } from "@/types";

type Props = {}

const Page = (props: Props) => {
  const [data, setData] = React.useState<Message[]>([])

  React.useEffect(() => {
    const runit = async () => {
      const querySnapshot = await getDocs(collection(db, "orders"));
      let orders: Message[] = []
      querySnapshot.forEach((doc) => {
        orders.push({
          id: doc.id,
          ...doc.data()
        }as Message)
      });
      setData(orders)
    }
    return ()=>{
      runit()
    }
  },[])

  return (
    <div className=' mx-auto container'>
        <div className='flex py-8 justify-between items-end'>
            <h1 className='text-5xl'>Orders</h1>
        </div>
        <MessagesTable data={data}/>

    </div>
  )
}

export default Page