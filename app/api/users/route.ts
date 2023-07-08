import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { use } from "react";

const prisma=new PrismaClient

export const GET = async(req: NextRequest)=>{
    const users=await prisma.users.findMany({})
        return NextResponse.json({ users })
}

export const POST=async(req: NextRequest)=>{
    const {name,email}=await req.json()
    const users=await prisma.users.create({
        data:{
            name:name,
            email:email
        }
    })
    return NextResponse.json({
        message:"success",
        data:users
    })
}