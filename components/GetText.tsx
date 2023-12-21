"use client"
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {
    id:string,
    // i want the props to be the html span props
    props ?: React.HTMLProps<HTMLSpanElement>

}

const GetText = ({id,props}: Props) => {
    const t = useTranslations('translation');
  return (
    <span {...props} dangerouslySetInnerHTML={{__html: t(id)?.replace(/\n/g,"<br/>" ) as string}}></span>
  )
}

export default GetText