"use client"
import React, { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowUp, CheckIcon, GalleryVerticalIcon, ImageIcon, Plus, SaveIcon, TrashIcon, TypeIcon } from 'lucide-react'


import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";



type Props = {}


type Section = {
  id: string,
} & ({
  type: "img",
  img: string
} | {
  type: "text",
  text: string
} | {
  type: "title",
  text: string
} | {
  type: "video",
  video: string
} | {
  type: "gallery",
  gallery: string[]
})




function page({}: Props) {
  const [sections, setSections] = React.useState<Section[]>([])
  return (
    <div>



      <div className="flex flex-col gap-4 mt-20 container">
          <div className="flex px-12 flex-col gap-2 ">
                <h4 className='text-sm md:text-xl text-muted-foreground '>September 15, 2023</h4>
                <h2 className='text-xl md:text-5xl '>Top Wedding Stationary Suppliers</h2>
                <h3 className='md:text-2xl '>Wedding</h3>
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

    </div>
    </div>
  )
}








const Section = ({section,sections,setSections}:{section:Section,
  sections:Section[],
  setSections:(sections:Section[])=>void
})=>{
    const titleRef = useRef<HTMLHeadingElement>(null)

      useEffect(() => {
        if (titleRef.current && section.type === "title") {
          // i want to focus the title
      titleRef.current.focus()
    }

      }, [section]);


      const editor = useCreateBlockNote({
          // i want it to be light theme          
        domAttributes:{
          
          block: {
            class: "bg-white text-black fontcharm ",
          }

        }
      });


      const A = ()=>{

          if (section.type === "img") {
            return <img className="max-w-4xl" src={section.img } />
          } else if (section.type === "text") {
              // i want the p to be editable
              return <BlockNoteView editor={editor} />;
                
          } else if(section.type === "title"){
            return (
            <div className="relative">
            <h1  
              ref={titleRef}
              dangerouslySetInnerHTML={{__html: section.text}}
              contentEditable className="text-4xl"></h1>
              <Button size="icon" onClick={
              ()=>{
                const index = sections.findIndex((s) => s.id === section.id)
                const newSections = [...sections]
                newSections[index] = {
                  ...section,
                  text: titleRef.current?.innerText || ""
                }
                setSections(newSections)
                }
              } className="absolute right-0 top-0">
                <CheckIcon  />
              </Button>
            </div>
            )
          } else if(section.type === "video") {
            return <video src={section.video} />
          } else if(section.type === "gallery") {
            return <div>
              {
                section.gallery.map((img) => {
                  return <img src={img} />
                })
              }
            </div>
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
