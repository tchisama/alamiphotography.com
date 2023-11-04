"use client"
import CreateAdmin from '@/components/CreateAdmin'
import { Button } from '@/components/ui/button'
import { auth, db } from '@/firebase'
import { Timestamp, collection, getDocs, onSnapshot } from 'firebase/firestore'
import { Plus } from 'lucide-react'
import React, { useEffect } from 'react'

type Props = {}
type Admin = {
  name: string
  email: string
  createdAt: Timestamp,
  uid: string
  id: string
}
function Page({}: Props) {
  const [admins, setAdmins] = React.useState<Admin[]>([])
  useEffect(() => {
    const getAdmins = async () => {
      await onSnapshot(collection(db, "admins"),(Admins)=>{
        setAdmins(Admins.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Admin[])
      })
    }
    getAdmins()
  },[])
  return (
    <div className='px-2 '>
        <div className='container mx-auto'>

            <h1 className='text-5xl my-8'>Admins</h1>
            <CreateAdmin/>
            <div className='py-8 grid grid-cols-3 gap-4'>
            {
              admins.map((admin) => (
                <div key={admin.id} className='flex bg-[#fafaf8] flex-col gap-2 border p-4 px-8 text-lg'>
                  <p>name : {admin.name}</p>
                  <p>email : {admin.email}</p>
                </div>
              ))
            }
            </div>
      </div>
    </div>
  )
}

export default Page