"use client"
import React from 'react'
import { Dialog, DialogHeader, DialogTitle } from './ui/dialog'
import { Icon,LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Separator } from './ui/separator'

type Props = {
    Title?:string,
    SubTitle?:string,
    icon?:LucideIcon,
    iconClassName?:string,
    titleClassName?:string,
    subtitleClassName?:string
}

const CustomeDialogHeader = ({SubTitle,Title,icon:Icon,iconClassName,subtitleClassName,titleClassName}: Props) => {
    
  return (
    <DialogHeader className='py-0'>
        <DialogTitle asChild>
            <div className='flex flex-col items-center gap-2 mb-2'>
                {Icon&&(
                    <Icon
                    size={30}
                    className={cn("stroke-primary",iconClassName)}
                    />
                )}
                {Title&&(
                    <p className={cn("text-xl text-primary",titleClassName)}>{Title}</p>
                )}
                  {SubTitle&&(
                    <p className={cn("text-sm text-muted-foreground",subtitleClassName)}>{SubTitle}</p>
                )}

            </div>
            

        </DialogTitle>
        <Separator/>

    </DialogHeader>
  )
}

export default CustomeDialogHeader