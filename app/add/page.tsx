'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Form from "../component/form"

export default  function Add(){

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [isLoading,setIsLoading]=useState(false)

    const router=useRouter()

    const addHandler=async (e:any)=>{
        e.preventDefault()
        setIsLoading(true)
        await fetch("/api/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email
            })
        }).then(res=>{
            // console.log(res)
            router.refresh()
        }).catch(err=>{
            console.log(err)
        })
        
        setEmail("")
        setName("")
        setIsLoading(false)
        router.push("/")
    }

    const handleName=(e:string)=>{
        setName(e)
    }

        return(
            <div>
               <div>
                <Form textButton={"Add Note"} sendHandler={addHandler} isLoading={isLoading} setEmail={setEmail} email={email}  handleName={handleName} name={name} />
               </div>
               {/* <p>{name}</p>
               <p>{email}</p> */}
            </div>
        )    
      
}