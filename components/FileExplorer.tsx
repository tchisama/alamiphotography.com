import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { collection, doc, getDoc, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { db } from '@/firebase'
import { Folder, Photo } from '@/types'
  
type Props = {
    children: React.ReactNode
}

const FileExplorer = ({children}: Props) => {
    const [path,setPath] = useState("")



    const [folders, setFolders] = React.useState<Folder[]>([])
    const [photos, setPhotos] = React.useState<Photo[]>([])
    const [folder, setFolder] = React.useState<Folder>()
    const [loading, setLoading] = React.useState(true)

  React.useEffect( () => {
      const q = query(collection(db, "folders"), where("parent", "==", "path"),orderBy("createdAt","desc"));
      onSnapshot(q,(querySnapshot)=>{
      let fs: Folder[] = []
      querySnapshot.forEach((doc) => {
        fs.push({
          id: doc.id,
          ...doc.data()
        }as Folder)
      });
      setFolders(fs)
      setLoading(false)
      });

      if(path==""){
        return
      }

      const q2 = query(collection(db, "photos") ,orderBy("createdAt","desc"), where("parent", "==", path));
      onSnapshot(q2,(querySnapshot2)=>{
        let phts: Photo[] = []
        querySnapshot2.forEach((doc) => {
          phts.push({
            id: doc.id,
            ...doc.data()
          }as Photo)
        });
        setPhotos(phts)
      })

      const docRef = doc(db, "folders", path as string);
      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          setFolder({...docSnap.data(),id:path} as Folder)
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        setLoading(false)
      })
  },[path])






  return (
        <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            </DialogHeader>
            <div>

            </div>
        </DialogContent>
        </Dialog>
  )
}

export default FileExplorer