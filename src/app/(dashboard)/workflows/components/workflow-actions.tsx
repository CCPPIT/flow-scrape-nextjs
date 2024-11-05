"use client"
import TooltipWrapper from '@/components/TooltipWrapper'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreVerticalIcon, TrashIcon } from 'lucide-react'
import React, { useState } from 'react'
import DeleteWorkFlowDialog from './DeleteWorkFlowDialog'

type Props = { 
    children:React.ReactNode,
    workflowName:string
}

const WorkFlowActions = ({children,workflowName}: Props) => {
    const [showDeleteDialog,setShowDeleteDialog]=useState(false)
  return (
    <div className='flex justify-end'>
        <DeleteWorkFlowDialog
        open={showDeleteDialog}
        setOpen={setShowDeleteDialog}
        workflowName={workflowName}

        />
        <DropdownMenu >
            <DropdownMenuTrigger>
               <Button variant={"outline"} size={"sm"} asChild>
               {children}
               
               </Button>
             

            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator/>
            <DropdownMenuItem
            onSelect={()=>setShowDeleteDialog((prev)=>!prev)}
             className='text-destructive flex items-center gap-2'>
                <TrashIcon/>
                Delete
                
            </DropdownMenuItem>
                

            </DropdownMenuContent>
           
        </DropdownMenu>
    </div>
  )
}

export default WorkFlowActions