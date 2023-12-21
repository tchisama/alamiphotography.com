import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { Separator } from './ui/separator'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import Image from 'next/image'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'
import { toast } from './ui/use-toast'
import GetText from './GetText'
import { useTranslations } from 'next-intl'

type Props = {}

const GuideBookSection = (props: Props) => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const t = useTranslations('translation');
  const [loading, setLoading] = React.useState(false);
  const submit =async () => {
    setLoading(true)
    await addDoc(collection(db, "Guides"), {
      name: form.name,
      email: form.email,
      message: form.message,
      createdAt: serverTimestamp()
    }).then(() => {
      setLoading(false)
      setForm({
        name: "",
        email: "",
        message: "",
      })
      toast({
        description: "Your message has been sent. Thank you!",
        title: "Success",
      })
    })
  }
  return (
    <div className='flex flex-col-reverse md:flex-row gap-10 mt-32 items-center'>
        <div className='flex-[4] flex flex-col gap-4 items-center text-center'>
            <h1 className='text-2xl md:text-5xl'><GetText id="experiencePage_guide_title"/></h1>
            <p className='text-sm md:text-lg font-sans'><GetText id="experiencePage_guide_subtitle"/></p>
            <Separator/>
            <Input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className='font-sans' placeholder={t("experiencePage_guide_name")} />
            <Input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className='font-sans' placeholder={t('experiencePage_guide_email')} />
            <Textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className='font-sans' placeholder={t("experiencePage_guide_i'm_open_to_any_request")}/>
            <Button disabled={loading} onClick={submit} className='text-sm md:text-lg pt-7 uppercase tracking-wider flex gap-4 items-center'>Get Now <ArrowRight size={18}/></Button>
        </div>
        <div className='flex-[4]'>
            <p className='md:text-start text-sm text-center md:text-lg'><GetText id="experiencePage_guide_paragraph"/></p>
        </div>
        <div className='flex-[2]'>
            <Image width={500} height={750} className='w-full bg-[#0002]' src="https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F943996204%20SEND%20YOU%20A%20GUIDE.jpg?alt=media&token=141e01a2-8b2d-41a3-bfb5-d947c30429eb" alt="" />
        </div>
    </div>
  )
}

export default GuideBookSection