import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma=new PrismaClient

export const GET = async(req: NextRequest)=>{
    // console.log("HHHY")
    const users=await prisma.users.findMany({})
    if (!users) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }

    return NextResponse.json({users})
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
export const DELETE = async (req: NextRequest) => {
    console.log("HAAYYYYS")
    const url = new URL(req.url).searchParams
    const id = Number(url.get('id')) || 0

    const user = await prisma.users.delete({
        where: {
            id: id
        }
    })

    if (!user) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }

    return NextResponse.json({})
}