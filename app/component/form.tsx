"use client"

import { Dispatch, SetStateAction } from "react"


interface Props{
    sendHandler:(values:any)=>void,
    handleName:(values:string)=>void,
    name:string,
    setEmail: Dispatch<SetStateAction<string>>
    email:string,
    isLoading:boolean,
    isLoadingGetUpdate?:boolean,

}

export default function Form({isLoading,sendHandler,handleName,name,setEmail,email,isLoadingGetUpdate}:Props){
    return(
    <form onSubmit={sendHandler} >
        <input onChange={(e)=>{handleName(e.target.value)}} value={name}  required type="username"  placeholder={isLoadingGetUpdate?"Loading...":"Name"} className="mt-1 px-3 py-2 border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  focus:ring-1"/>
        <input onChange={(e)=>{setEmail(e.target.value)}} value={email}   required type="email"  placeholder={isLoadingGetUpdate?"Loading...":"you@example.com"}  className="mt-1 px-3 py-2 border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  focus:ring-1"/>
        <button className="add">{isLoading ?"Loading..": "Add User"}</button>
    </form>
    )
}