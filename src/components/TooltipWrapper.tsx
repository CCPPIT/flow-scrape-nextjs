"use client"
import React, { ReactNode } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

type Props = {
    children:React.ReactNode,
    content:React.ReactNode,
    side?:"top"|"bottom"|"left"|"right"
}

const TooltipWrapper = ({children,side,content}: Props) => {
  return (
    <TooltipProvider delayDuration={0}>
        <Tooltip>
            <TooltipTrigger asChild>
                {children}

            </TooltipTrigger>
            <TooltipContent side={side}>
                {content}

            </TooltipContent>
        </Tooltip>

    </TooltipProvider>
  )
}

export default TooltipWrapper