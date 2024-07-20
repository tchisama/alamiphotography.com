"use client"
import React, { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowUp, CheckIcon, GalleryVerticalIcon, ImageIcon, Plus, SaveIcon, TrashIcon, TypeIcon } from 'lucide-react'


import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { Timestamp, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { useParams } from 'next/navigation';
import { Input } from '@/components/ui/input';


type Blog = {
  id: string,
  title: string,
  date: Timestamp,
  category: string,
  content : {
    type: string,
    data: string
  }[]
}


type Props = {}


type Section = {
  id: string,
} & ({
  type: "img",
  img: string
} | {
  type: "text",
  text: string
} )




function page({}: Props) {
  const [sections, setSections] = React.useState<Section[]>([])
  const [blog, setBlog] = React.useState<Blog>()
  const {blogId} = useParams()

  useEffect(() => {
    getDoc(doc(db as any,'blogs',blogId as string) )
    .then((doc) => {
      setBlog({...doc.data() as Blog, id: doc.id})
    })
  }
  ,[blogId])


  const save = ()=>{
    updateDoc(
      doc(db as any,'blogs',blogId as string),
      {
        ...blog,
        content: sections
      }
    )
  }

  return (
    blog &&
    <div>



      <div className="flex flex-col gap-4 mt-20 container">
          <div className="flex px-12 flex-col gap-2 ">
                <h4 className='text-sm md:text-xl text-muted-foreground '>{blog.date.toDate().toDateString()}</h4>
                <Input onInput={
                (e:any ) => {
                  setBlog({
                    ...blog,
                    title: e.target.value
                  })
                }
            } className='text-xl md:text-5xl fontcharm px-0 border-none' value={blog.title?? "no title set yet"}></Input>
                <Input 
                onInput={
                (e:any ) => {
                  setBlog({
                    ...blog,
                    category: e.target.value
                  })
                }
            }
              className=' md:text-2xl fontcharm px-0 h-8 border-none' value={blog.category?? "no title set yet"}></Input>
          </div>

                {/* <p className='py-4 text-sm md:py-20 md:text-xl '>LoLorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore natus doloremque, ipsam magni doloribus delectus, inventore incidunt id ullam praesentium assumenda iure dolorum quidem illo, quis provident animi cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore natus doloremque, ipsam magni doloribus delectus, inventore incidunt id ullam praesentium assumenda iure dolorum quidem illo, quis provident animi cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore natus doloremque, ipsam magni doloribus delectus, inventore incidunt id ullam praesentium assumenda iure dolorum quidem illo, quis provident animi cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore natus doloremque, ipsam magni doloribus delectus,</p> */}

      {
        sections.map((section: Section) => {
        return <Section section={section} 
              {...{sections,setSections}}
            />
      }) 
      }


      <div className="flex gap-2 ">
      <Button 
      onClick={() => {
        setSections([...sections, {
          id: Math.random().toString(),
          type: "img",
          img: "https://source.unsplash.com/random"
        }])
      }}
          className="flex gap-2 font-sans"> <ImageIcon />Add Section</Button>
      <Button
      onClick={() => {
        setSections([...sections, {
          id: Math.random().toString(),
          type: "text",
          text: "LLorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore natus doloremque, ipsam magni doloribus delectus, inventore incidunt id ullam praesentium assumenda iure dolorum quidem illo, quis provident animi cumque.orem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore natus doloremque, ipsam magni doloribus delectus, inventore incidunt id ullam praesentium assumenda iure dolorum quidem illo, quis provident animi cumque."
        }])
      }
      }
          className="flex gap-2 font-sans"> <TypeIcon />Add Section</Button>
      {/* <Button */}
      {/* onClick={() => { */}
      {/*   setSections([...sections, { */}
      {/*     id: Math.random().toString(), */}
      {/*     type: "title", */}
      {/*     text: "Title"<p  */}
      {/*       contentEditable={true} */}
      {/*       className="text-md" */}
      {/*         >{section.text}</p> */}
      {/*   }]) */}
      {/* } */}
      {/* } */}
      {/*     className="flex gap-2 font-sans"> <TypeIcon />Add title</Button> */}
      <Button
          className="flex gap-2 font-sans"> <GalleryVerticalIcon />Add Section</Button>

      </div>
      <Button onClick={ save } className="absolute top-2 right-2 font-sans text-lg">Save</Button>
    </div>
    </div>
  )
}








const Section = ({section,sections,setSections}:{section:Section,
  sections:Section[],
  setSections:(sections:Section[])=>void
})=>{

      const editor = useCreateBlockNote({
    // i want it to be light theme          
        domAttributes:{
          
          block: {
            class: "bg-white text-black fontcharm ",
          }

        }
      });
      const Save = async () => {
        const text = await editor.blocksToHTMLLossy(editor.document)
          console.log(text)
          setSections(sections.map((s) => {
            if (s.id === section.id) {
              return {
                ...s,
                text
              }
            } else {
              return s
            }
          }
        ))
      } 

        const A = ()=>{

            if (section.type === "img") {
              return <img className="max-w-4xl" src={section.img } />
            } else if (section.type === "text") {
                // i want the p to be editable
                return <BlockNoteView editor={editor} />;
            } else {
              return <div>Unknown Section Type</div>
            }
    }
      return (
      <div className="width-full relative group">
      <A />
      <div className="hidden group-hover:block">
      <Button onClick={()=>{
        setSections(sections.filter((s) => s.id !== section.id))
      }} size="icon" variant="outline" ><TrashIcon /></Button>
      <Button onClick={()=>{
        const index = sections.findIndex((s) => s.id === section.id)
        const newSections = [...sections]
        const temp = newSections[index]
        newSections[index] = newSections[index + 1]
        newSections[index + 1] = temp
        setSections(newSections)
      }} size="icon" variant="outline" ><ArrowDown /></Button>
      <Button onClick={()=>{
        const index = sections.findIndex((s) => s.id === section.id)
        const newSections = [...sections]
        const temp = newSections[index]
        newSections[index] = newSections[index - 1]
        newSections[index - 1] = temp
        setSections(newSections)
      }} size="icon" variant="outline" ><ArrowUp /></Button>

      </div>
    </div>
    )
}







export default page
