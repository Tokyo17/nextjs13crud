import { PrismaClient } from '@prisma/client'
import Image from 'next/image'


const getUsers=async()=>{
  const res=await fetch(process.env.BASE_URL+'/api/users',{ next: { revalidate: 0 } })
  const json=await res.json()
  return json
}

const prisma=new PrismaClient()

const getUsersFromDb=async()=>{
  const users=await prisma.users.findMany({})
  return  users
}

export default async function Home() {

  const url=process.env.BASE_URL
  const users=await getUsersFromDb()


  
  return (
    <div>
      <div className='content-home'>
        {users?.map((user:any,index:number)=>(
          <div key={index} className="bingkai">
            <p >{user.name}</p>
            <p>{user.email}</p>
            <div className='tombol'>
              <button className='update'>Update</button>
              <button className='delete'>Delete</button>
            </div>
          </div>
        ))}
        {process.env.NAME}
        {/* {process.env.DATABASE_URL} */}
      </div>
    </div>
  )
}
