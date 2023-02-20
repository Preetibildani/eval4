import React from 'react'
import { useState } from 'react'
import axios from "axios"
export const Register = () => {
    const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [age,setAge]=useState("")

const handlesub=()=>{
   const payload={
        name,
        email,
        password,
        age
    }
axios.post("https://distinct-bikini-lamb.cyclic.app/user/register",payload)
.then((e)=>e)
.catch((err)=>console.log(err))

}
console.log("name",name)
  return (
    <div>
        
    <h1>register</h1> 
    <input type="text" value={name} placeholder="name" onChange={(e)=>setName(e.target.value)}   /><br/>
    <input type="text" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)}   /><br/>
    <input type="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}   /><br/>
    <input type="text" value={age} placeholder="age" onChange={(e)=>setAge(e.target.value)}   /><br/>
    <button onClick={handlesub} >submit</button>

</div>
  )
}
