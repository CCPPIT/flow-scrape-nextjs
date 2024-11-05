"use server"

import { client } from "@/lib/prisma";
import { createWorkFlowSchema, createworkflowSchemaType } from "@/schema/create-workflow"
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const createWorkFlow=async(form:createworkflowSchemaType)=>{
    const {success,data}=createWorkFlowSchema.safeParse(form);
    if(!success){
        throw new Error("Invalid form data")
    }
    const {userId} = await auth();
    if(!userId){
        throw new Error ("unauthenticated");
    }
    const result=await client.workFlow.create({
        data:{
            userId,
            status:"DRAFT",
            definition:"TODO",
            ...data
        }
    })
    if(!result){
        throw new Error ("Failed to create wrkflow")
    }
    redirect(`/workflow/editor${result.id}`)

}