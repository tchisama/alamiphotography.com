import React from 'react'
import { Button } from './ui/button'
import { Replace } from 'lucide-react'
import FileExplorer from './FileExplorer'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'

type Props = {
    section:string,
    image:string
}

function ChangeImageTo({section,image}: Props) {
    const changeImage = (img:string) => {
        updateDoc(doc(db, "configs",section), {
            [image]:img
        })
    }
  return (
    <div>
        <FileExplorer cta={changeImage}>
            <Button size={"icon"} variant={"outline"} className='absolute right-0 top-0'><Replace/></Button>
        </FileExplorer>
    </div>
  )
}

export default ChangeImageTo