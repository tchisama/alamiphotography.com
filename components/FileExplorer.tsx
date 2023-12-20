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
import { Separator } from './ui/separator'
import { ArrowLeft, FolderIcon } from 'lucide-react'
import { Button } from './ui/button'
import { DialogClose } from '@radix-ui/react-dialog'
import UploadImage from './UploadImage'
import Image from 'next/image'
  
type Props = {
    children: React.ReactNode
    cta : (v:string) => void
}

const FileExplorer = ({children,cta}: Props) => {
    const [path,setPath] = useState("")



    const [folders, setFolders] = React.useState<Folder[]>([])
    const [photos, setPhotos] = React.useState<Photo[]>([])
    const [folder, setFolder] = React.useState<Folder|null>(null)
    const [loading, setLoading] = React.useState(true)

  React.useEffect( () => {
        setFolders([])
        setPhotos([])
      const q = query(collection(db, "folders"), where("parent", "==", path),orderBy("createdAt","desc"));
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

      if(path!==""){
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

      }
  },[path])






  return (
        <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className='max-w-[800px] max-h-[90vh] overflow-y-auto'>
            <DialogHeader>
            <DialogTitle>Choose your file</DialogTitle>
            </DialogHeader>
            <div>
                <div className='flex gap-8'>
                    {
                        path !== "" &&
                        <Button className='flex gap-2' size='sm' variant={"outline"} onClick={() => setPath(folder?.parent as string)}> <ArrowLeft size={18}/>Back</Button>
                    }
                    <h1 className='text-2xl'>
                    {
                        path == "" ? "Root" : "/"+folder?.name
                    }
                    </h1>
                    {
                        path !== "" &&
                        <div className='ml-auto'>
                        <UploadImage parent={path} />
                        </div>
                    }
                </div>
                <div  className='my-4'>
                <Separator/>
                </div>
                <div className='grid gap-2 grid-cols-2 '>
                {
                    folders.length >0 ?
                    folders.map((f)=>{
                        return(
                            <FolderComp setPath={setPath} folder={f} key={f.id}/>
                        )
                    }):
                    <p>No children</p>
                }
                </div>
                <div  className='my-4'>
                    <Separator/>
                </div>
                <div className='grid gap-2 grid-cols-3'>
                {
                    photos.length>0  ?
                    photos.map((p)=>{
                        return(
                            <DialogClose key={p.id} onClick={() => {cta(p.image)}}>
                                <ImageComp  img={p}/>
                            </DialogClose>
                        )
                    }):
                    <p>No images</p>
                }
                </div>
            </div>
        </DialogContent>
        </Dialog>
  )
}



const FolderComp = ({folder,setPath}: 
    {
        folder:Folder,
        setPath: (path:string) => void
    }
    ) => {
    return(
        <button className='flex items-center gap-2 p-2 border' onClick={() => setPath(folder.id)}>
            <FolderIcon size={38} strokeWidth={1}></FolderIcon>
            <p className='text-2xl'>{folder.name}</p>
        </button>
    )
}



const ImageComp = ({img}:{img:Photo}) => {
    return (
            <div className='bg-[#fafaf8] font-mono relative overflow-hidden aspect-square border '>
                <Image width={200} height={200} className='w-full h-full object-contain' src={img.image} alt=""/>
            </div>
    )
}




export default FileExplorer