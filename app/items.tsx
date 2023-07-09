"use client"
import { useRouter } from "next/navigation"


interface Props{
    user : {
      id: number;
      name: string | null;
      email: string;
  }
}



export default function Items({user}:Props){

const router=useRouter()

const handleDelete=async (id:number)=>{
  await fetch("api/users?id="+id,{
    method:"DELETE"
  })
  router.refresh()
}



    return(
     <div  className="bingkai">
        <p >{user.name}</p>
        <p>{user.email}</p>
        <div className='tombol'>
          <button className='update'>Update</button>
          <button onClick={()=>{handleDelete(user.id)}} className='delete'>Delete</button>
        </div>
      </div>
    )
}