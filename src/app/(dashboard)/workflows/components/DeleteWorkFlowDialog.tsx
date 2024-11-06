"use client"
import { DeleteWorkFlow } from "@/actions/workflows/delete-workflow"
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
import { useMutation } from "@tanstack/react-query"
import React, { useState } from 'react'
import { toast } from "sonner"

type Props = {
  open:boolean,
  setOpen:(open:boolean)=>void,
  workflowName:string,
  workflowId:string
}

const DeleteWorkFlowDialog = ({open,setOpen,workflowName,workflowId}: Props) => {
  const [confirmText,setConfirmText]=useState("");
  const deleteMutation=useMutation({
    mutationFn:DeleteWorkFlow,
    onSuccess:()=>{

      toast.success("Workflow deleted successfully",{id:workflowId})
      setConfirmText("")
    },
    onError:()=>{
      toast.error("Something went wrong",{id:workflowId})
    }
  })
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
        <AlertDialogCancel onClick={()=>setConfirmText("")}>Cancel</AlertDialogCancel>
        <AlertDialogAction
        disabled={confirmText !== workflowName || deleteMutation.isPending}
        className="bg-destructive
        text-destructive-foreground
        hover:bg-destructive/90"
        onClick={(e)=>{
          e.stopPropagation()
          
          toast.loading("Deleting workflow....",{id:workflowId})
          deleteMutation.mutate(workflowId)
         

        }}
        
        >Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}

export default DeleteWorkFlowDialog