
"use server"
import { client } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


export const getWorkFlowForUser=async()=>{
    const {userId}=await auth()
    if(!userId){
        throw new Error("Unauthentication")
    }
    

    return client.workFlow.findMany({
        where:{
            userId,

        },
        orderBy:{
            createdAt:"asc"
        }
    })
   

}