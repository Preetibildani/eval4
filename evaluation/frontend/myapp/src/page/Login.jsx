import React from 'react'
import { useState } from 'react'
import axios from "axios"
export const Login = () => {
    
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")


const handlesub=()=>{
    const payload={
        
        email,
        password,
        
    }
axios.post("https://distinct-bikini-lamb.cyclic.app/user/login",payload)
.then((res)=>{
    
    localStorage.setItem("token",res.data.token)
    console.log(res.data.token)})
.catch((err)=>console.log(err))

}
  return (
    <div>
        
        <h2>
        Login
            
            </h2> 



        <input type="text" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)}   /><br></br>
        <input type="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}   /><br></br>
   
        <button onClick={handlesub} >submit</button>
    </div>
  )
}

