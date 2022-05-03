import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup({setCurrentUser}) {
  return (
    <div className=" font-bold">SignupPage
        <Link to='/'><button onClick={() => setCurrentUser(true)}>Sign Up</button></Link>
    </div>
  )
}
