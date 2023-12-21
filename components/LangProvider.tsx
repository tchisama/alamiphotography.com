"use client"
import { db } from '@/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type Props = {
    children: React.ReactNode,
    locale: string
}



function LangProvider({children, locale}: Props) {
    const [messages,setMessages] = useState({})

    useEffect(() => {
        try {
            // get Doc of collection "configs" and id "translate"
            getDoc(doc(db, "configs", "translate")).then(
                (doc) => {
                    if (doc.exists()) {
                        const result: { [key: string]: string } = {};
                        const obj = doc.data();
    
                        console.log('Original Object:', obj);
                        console.log('Locale:', locale);
    
                        for (const key in obj) {
                            if (obj.hasOwnProperty(key)) {
                                // Check for the specified locale, prioritize it, and fallback to the other language if not available
                                result[key] = obj[key][locale]? obj[key][locale] : obj[key]["en"];
                            }
                        }
    
                        console.log('Result:', result);
    
                        setMessages({ translation: result, lang: { local: locale } });
                    } else {
                        notFound();
                    }
                }
            );
        } catch (error) {
            notFound();
        }
    }, [locale]);
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
        <div>{children}</div>
    </NextIntlClientProvider>
  )
}

export default LangProvider