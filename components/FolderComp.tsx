import { FolderIcon, MoreVertical } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Folder } from '@/types';

type Props = {}

const FolderComp = ({folder}:{folder: Folder}) => {
    const handleButtonClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the link from navigating
        // Add your button click logic here
      };
    return(
            <Link href={"/dashboard/uploads/"+folder.id} className='bg-[#fafaf8]  p-4 border shadow-sm rounded-xl flex gap-4 items-center'>
                <FolderIcon className='text-primary' size={50} strokeWidth={1}/>
                <Separator orientation='vertical' />
                <div className='flex-1'>
                    <h3 className='text-lg'>{folder.name}</h3>
                    <p className='text-muted-foreground'>1 images</p>
                </div>
                <Button onClick={handleButtonClick} variant={"ghost"} className='text-primary' size={"icon"}><MoreVertical size={20}/></Button>
            </Link>
    )
}

export default FolderComp