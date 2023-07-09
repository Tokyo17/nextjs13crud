import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";



const prisma=new PrismaClient()

export const GET=async (req:NextApiRequest,contex:{params:{id:string}})=>{

    
    const id=Number(contex.params.id)||0

    console.log("IDNYA : ",id)
    const user= await prisma.users.findFirst({
        where:{
            id:id
        }

    })
    return NextResponse.json({user})
}