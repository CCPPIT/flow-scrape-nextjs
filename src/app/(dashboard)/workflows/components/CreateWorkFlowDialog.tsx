"use client"
import CustomeDialogHeader from '@/components/CustomeDialogHeader'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Layers2Icon, LayersIcon, Loader2 } from 'lucide-react'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createworkflowSchemaType,createWorkFlowSchema } from '@/schema/create-workflow'
import { useMutation } from '@tanstack/react-query'
import { createWorkFlow } from '@/actions/workflows/createworkflow'
import { toast } from 'sonner'

type Props = {
    TriggerText?:string
}

const CreateWorkFlowDialog = ({TriggerText}: Props) => {
    const [Open,setIsOpen]=useState(false);
    const form=useForm<createworkflowSchemaType>({
        resolver:zodResolver(createWorkFlowSchema),
        defaultValues:{

        }
    })
    const {mutate,isPending}=useMutation({
        mutationFn:createWorkFlow,
        onSuccess:()=>{
            
            toast.success("Workflow created",{id:"create-workflow"})
            form.reset()
        },
        onError:()=>{
            toast.error("Failed to create workflow",{id:"create-workflow"})


        }
    })
    const onSubmit=useCallback((values:createworkflowSchemaType)=>{
        toast.loading("Creating workflow....",{id:"create-workflow"});
        mutate(values)

    },[mutate])
  return (
   <Dialog open={Open} onOpenChange={setIsOpen}>
    <DialogTrigger asChild>
        <Button>{TriggerText?? "Create WorkFlow"}</Button>

    </DialogTrigger>
    <DialogContent className='px-0'>
        <CustomeDialogHeader
        Title='Create workflow'
        SubTitle='Start building your workflow'
        icon={Layers2Icon}
        />
        <div className='p-6'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>
                    <FormField
                    control={form.control}
                    name='name'
                    render={({field})=>(
                        <FormItem>
                            <FormLabel className='flex gap-1 items-center'>Name
                                <p className='tex-sm text-primary'>(Required)</p>
                            </FormLabel>
                            <FormControl>
                                <Input
                                {...field}
                                />
                            </FormControl>
                            <FormDescription>Choose a descriptive and unique name</FormDescription>
                            <FormMessage/>

                        </FormItem>

                    )}
                    />
                    <FormField
                    control={form.control}
                    name='description'
                    render={({field})=>(
                        <FormItem>
                            <FormLabel className='flex gap-1 items-center'>Description
                                <p className='tex-xs text-muted-foreground'>(Optional)</p>
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                {...field}
                                />
                            </FormControl>
                            <FormDescription>Provide a brief description of what your workflow dose.
                                <br/>This is optional but can help you remember the
                                wrkflow&apos;s purpose
                            </FormDescription>
                            <FormMessage/>

                        </FormItem>

                    )}
                    />
                    <Button type='submit' className='w-full' disabled={isPending}>
                        {!isPending &&"Proceed "}
                        {isPending &&<Loader2 className='animate-spin'/>}
                        </Button>
                </form>

            </Form>

        </div>
    </DialogContent>

   </Dialog>
  )
}

export default CreateWorkFlowDialog