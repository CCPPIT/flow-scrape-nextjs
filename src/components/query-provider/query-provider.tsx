"use client"
import {QueryClientProvider,QueryClient}from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import React, { useState } from "react"
type Props={
    children:React.ReactNode
}

const QueryProvider = ({children}: Props) => {
    const [queryClient]=useState(()=>new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}

    </QueryClientProvider>
  )
}

export default QueryProvider