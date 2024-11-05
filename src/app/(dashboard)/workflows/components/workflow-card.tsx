"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { cn } from '@/lib/utils'
import { workFlowStatus } from '@/types/workflow'
import { WorkFlow } from '@prisma/client'
import { FileTextIcon, MoreVerticalIcon, PlayIcon, ShuffleIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import WorkFlowActions from './workflow-actions'
import TooltipWrapper from '@/components/TooltipWrapper'

type Props = {
    workflow:WorkFlow
}
const statusColors={
    [workFlowStatus.DRAFT]:"bg-yellow-400 text-yellow-600",
    [workFlowStatus.PUBLISHED]:"bg-primary"
}

const WorkFlowCard = ({workflow}: Props) => {
    const isDraft=workflow.status===workFlowStatus.DRAFT
  return (
    <Card className='border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primary/30'>

        <CardContent className='p-4 flex items-center justify-between h-[100px]'>
            <div className='flex items-center justify-end space-x-3'>
            <div className={cn("h-10 w-10 flex items-center justify-center rounded-full",
            statusColors[workflow.status as workFlowStatus]

            )}>
                {isDraft?(
                    <FileTextIcon className='w-5 h-5'/>

                ):(
                    <PlayIcon className='h-5 w-5 text-white'/>

                )}
            </div>
            <div>
                <h3 className='text-base font-bold text-muted-foreground flex items-center'>
                    <Link href={`/workflows/editor/${workflow.id}`} className='flex items-center hover:underline'>
                    {workflow.name}
                    </Link>
                    {isDraft&&(
                        <span className='ml-2 px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full'>{workflow.status}</span>
                    )}
                </h3>
            </div>
            </div>
            <div className='flex items-center space-x-2'>
                <Link href={`/workflows/editor/${workflow.id}`}
                className={cn(
                    buttonVariants({
                        variant:"outline",
                        size: "sm"
                    }),
                    "flex items-center gap-2"
                )}
                >
                    <ShuffleIcon className='size-4'/>
                    Edit
                </Link>
                <WorkFlowActions workflowName={workflow.name}>
                    <TooltipWrapper content={"More Actions"}>
                        <MoreVerticalIcon className='size-5'/>
                    </TooltipWrapper>
                </WorkFlowActions>
            </div>

        </CardContent>

    </Card>
  )
}

export default WorkFlowCard