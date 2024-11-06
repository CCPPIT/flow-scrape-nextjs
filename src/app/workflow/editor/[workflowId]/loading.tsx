import { Loader2Icon } from 'lucide-react'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
        <Loader2Icon size={30} className='animate-spin text-primary'/>
    </div>
  )
}

export default loading