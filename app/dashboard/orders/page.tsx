"use client"
import { collection, query, where, getDocs, onSnapshot, orderBy } from "firebase/firestore";
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
      const q = query(collection(db, "orders"),orderBy("createdAt","desc"));
      onSnapshot(collection(db, "orders"),(snapshot)=>{

      let orders: Message[] = []
      snapshot.forEach((doc) => {
        orders.push({
          id: doc.id,
          ...doc.data()
        }as Message)
      });
      setData(orders)
      });
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