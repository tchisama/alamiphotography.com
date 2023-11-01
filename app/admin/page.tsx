"use client"
import React from 'react'
import logo from "@/public/blacklogo.png"
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {AiOutlineGoogle} from "react-icons/ai"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase'


type Props = {}

function Page({}: Props) {
  const router = useRouter()

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const SignIn = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        router.push("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false)
        setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  }
  return (
    <form onSubmit={(e) => e.preventDefault()} className='min-h-screen flex items-center justify-center bg-[#fafaf8]'>
        <div className='w-full flex-1 gap-2 max-w-xl p-8 flex flex-col  items-center bg-[#fafaf8]'>
            <Image src={logo} alt='' className='mb-8' width={300}></Image>
            <div className='w-full'>
                <h4 className='my-2'>Email</h4>
                <Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            </div>
            <div className='w-full'>
                <h4 className='my-2'>Password</h4>
                <Input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} type={"password"}></Input>
            </div>
            <div className='flex w-full mt-4 space-x-2'>
              {/* <Button ><AiOutlineGoogle size={20}/></Button> */}
              <Button type='submit' onClick={SignIn} className=' flex-1 text-lg flex gap-2'>Login<LogIn size={20}/></Button>
            </div>
            
        </div>
    </form>
  )
}

export default Page