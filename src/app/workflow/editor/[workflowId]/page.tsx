import { getWorkFlow } from '@/actions/workflows/getworkflow'
import { WaitFor } from '@/helpers/WaitFor'
import { auth } from '@clerk/nextjs/server'
import React from 'react'
import Editor from '../../components/editor'

type Props = {
    params:{
        workflowId:string
    }
}

const WorkFlowEditor =async ({params}: Props) => {
  const {workflowId}=params
  
  const {userId}= await auth();
  if(!userId){
    throw new Error("unauthenticated")
  }
  const workflow=await getWorkFlow(workflowId);
  if(!workflow){
    throw new Error("Workflow not found")
  }

  return (
    <div className='h-screen'>
      <Editor workflow={workflow}/>
    </div>
  )
}

export default WorkFlowEditor