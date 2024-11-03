import { getWorkFlowForUser } from '@/actions/getWorkFlowForUser'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { WaitFor } from '@/helpers/WaitFor'
import { AlertCircle, InboxIcon } from 'lucide-react'
import React, { Suspense } from 'react'

type Props = {}

const WorkFlowPage = (props: Props) => {
  return (
    <div className='flex flex-1 flex-col h-full'>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
        <h1 className='text-3xl font-bold'>WorkFlows</h1>
        <p className='text-muted-foreground'>Manage your Workflows</p>

        </div>
     

      </div>
      <Suspense fallback={<UserWorkFlowSkeleton/>}>
        <UserWorkFlow/>

      </Suspense>
    </div>
  )


}
function UserWorkFlowSkeleton(){
  return(
    <div className='space-y-2'>
      {[1,2,3,4].map((i)=>(
        <Skeleton key={i} className='h-32 w-full'/>
      ))}
    </div>
  )
}
async function UserWorkFlow(){
  const workflows= await getWorkFlowForUser();
  
  if(!workflows){
    return(
      <Alert variant={"destructive"}>
        <AlertCircle className='w-4 h-4'/>
        <AlertTitle>Error</AlertTitle>
           <AlertDescription>Something went worng. Please try again later</AlertDescription>
      </Alert>
    )
  }
  if(workflows.length===0){
    return(
      <div className='flex flex-col items-center justify-center h-full gap-4'>
        <div className='rounded-full h-20 w-20 flex bg-accent items-center justify-center'>
          <InboxIcon size={20} className='stroke-primary'/>


        </div>
        <div className='flex flex-col text-center gap-1'>
          <p className='font-bold'>No WorkFlow Created Yet</p>
          <p className='text-sm text-muted-foreground'>Click The Button Below To Create First WorkFlow</p>


        </div>

      </div>
    )
  }
  return(
    <div></div>
  )
}



export default WorkFlowPage