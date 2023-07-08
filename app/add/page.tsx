'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

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
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        setIsLoading(false)
        router.refresh()
        router.push("/")
    }

    const getUsers=async()=>{
        setIsLoading(true);
        const res=await fetch('/api/users',{cache:"no-store"})
        const json=await res.json()
        return json
    }
    useEffect(() => {
        (async () => {
          const users = await getUsers();
          console.log(users);
          setIsLoading(false)
        })();
      

        return () => {
        };
      }, []);
    

        return(
            <div>
               <div>
                <form onSubmit={addHandler}>
                    <input onChange={(e)=>setName(e.target.value)} type="email" placeholder="name" className="mt-1 px-3 py-2 border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  focus:ring-1"/>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" className="mt-1 px-3 py-2 border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  focus:ring-1"placeholder="you@example.com" />
                    <button onClick={addHandler}  className="add">{isLoading ?"Loading..": "Add User"}</button>
                </form>
               </div>
               <p>{name}</p>
               <p>{email}</p>
            </div>
        )    
      
}