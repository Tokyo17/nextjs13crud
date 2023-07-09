"use client"

import { Dispatch, SetStateAction } from "react"


interface Props{
    sendHandler:(values:any)=>void,
    handleName:(values:string)=>void,
    name:string,
    setEmail: Dispatch<SetStateAction<string>>
    email:string,
    isLoading:boolean,
    textButton:string,
    isLoadingGetUpdate?:boolean,

}

export default function Form({textButton,isLoading,sendHandler,handleName,name,setEmail,email,isLoadingGetUpdate}:Props){
    return(
    <form onSubmit={sendHandler} >
        <input maxLength={16} onChange={(e)=>{handleName(e.target.value)}} value={name}  required type="text"  placeholder={isLoadingGetUpdate?"Loading...":"Title"} className="mt-1 px-3 py-2 border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  focus:ring-1"/>
        <textarea maxLength={263} onChange={(e)=>{setEmail(e.target.value)}} value={email}   required  placeholder={isLoadingGetUpdate?"Loading...":"Activity or plan"}  className="mt-1 px-3 py-2 border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  focus:ring-1"/>
        <button className="add">{isLoading ?"Loading..": textButton}</button>
    </form>
    )
}