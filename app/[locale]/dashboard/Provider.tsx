"use client"
import Loading from '@/components/Loading'
import { auth } from '@/firebase'
import { useRouter } from 'next/navigation'
import React, { useEffect, useLayoutEffect } from 'react'

type Props = {
    children: React.ReactNode
}

const Provider = ({children}: Props) => {
    const router = useRouter()
    const [loading, setLoading] = React.useState(true)
    useLayoutEffect(() => {
        setTimeout(() => {
            if(!auth.currentUser?.uid){
                router.push("/admin")
            }
            setLoading(false)
        }, 1000);
    },[auth.currentUser?.uid])
  return (
    <>{loading? <Loading></Loading>:children}</>
  )
}

export default Provider