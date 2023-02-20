import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div style={{display:"flex"}} >
        <Link to="/" >home</Link>
        <Link to="/post" >Post</Link>
        <Link to="/register" >register</Link>
        <Link to="/login" >login</Link>


    </div>
  )
}
