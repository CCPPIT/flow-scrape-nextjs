"use server"
import { client } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";

export const DeleteWorkFlow=async(id:string)=>{
    const {userId}= await auth();
    if(!userId){
        throw new Error("unauthenticated");
    }
    await client.workFlow.delete({
        where:{
            id,
            userId,
        }
    });
    revalidatePath("/workflows");


}