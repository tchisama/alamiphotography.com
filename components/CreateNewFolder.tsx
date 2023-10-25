import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import { Input } from './ui/input'
import { DialogClose } from '@radix-ui/react-dialog'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase'
  
type Props = {
    parent: string
}

function CreateNewFolder({parent}: Props) {
  const [name, setName] = React.useState("")
    
  const addFolder = async () => {
    if(name) {
        try {
            const docRef = await addDoc(collection(db, "folders"), {
                name,
                parent: parent
            });
            console.log("Document written with ID: ", docRef.id);
            setName("")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }else{
        alert("Please fill in the field")
    }
  }

  return (
<Dialog>
    <DialogTrigger asChild>
            <Button className='px-4 py-2 flex gap-2 rounded-lg shadow-md'>New folder <Plus size={20}/></Button>
    </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create a new folder</DialogTitle>
      <DialogDescription className=''>
        <Input value={name} onChange={(e) => setName(e.target.value)} size={12} className='mt-8'/>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
            <Button variant={"outline"} className='px-4 py-2'>Close</Button>
        </DialogClose>
        <DialogClose>
            <Button onClick={addFolder} className='px-4 py-2'>Create</Button>
        </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>

  )
}

export default CreateNewFolder