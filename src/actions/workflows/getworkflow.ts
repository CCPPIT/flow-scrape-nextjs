"use server"

import { client } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"

export const getWorkFlow=async(workflowId:string)=>{
    const {userId}=await auth();
    if(!userId){
        throw new Error("unauthenticated")
    }
    const workFlow=await client.workFlow.findUnique({
        where:{
            id:workflowId,
            userId
        }
    })
    if(!workFlow){
        throw new Error("Workflow Not Found")
    }
    return workFlow
    


}