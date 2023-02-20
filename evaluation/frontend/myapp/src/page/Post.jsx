import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Post = () => {
    const [data,setData]=useState([])
useEffect(()=>{
axios.get("https://distinct-bikini-lamb.cyclic.app/posts",{
headers:{
Authorization: "Bearer "  + localStorage.getItem("token")
}  }
).then((res)=>{
    setData(res.data)
console.log(res.data)

}).catch((e)=>console.log(e))

},[])



  return (
    <div>post
{
    data.map((i)=>{

        return(
            <div key={i._id}>
            {i.title}
            </div>
        )
    })
}

</div>)
}

export default Post