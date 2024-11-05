
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { useState } from 'react'

type Props = {
  open:boolean,
  setOpen:(open:boolean)=>void,
  workflowName:string
}

const DeleteWorkFlowDialog = ({open,setOpen,workflowName}: Props) => {
  const [confirmText,setConfirmText]=useState("");
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
    {/* <AlertDialogTrigger asChild>
      <Button variant="outline">Show Dialog</Button>
    </AlertDialogTrigger> */}
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          workflow and remove your data from our servers.
          <div className="flex flex-col py-4 gap-4">
            <p>If you are sure, enter <b> {workflowName} </b>  to confirm</p>
            <Input
            value={confirmText}
            onChange={(e)=>setConfirmText(e.target.value)}
            />

          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}

export default DeleteWorkFlowDialog