import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, setCurrentUser }) {
    function handleSignout() {
        setCurrentUser(false)
    }
    return (
        <div className='flex justify-between h-16 px-8 items-center bg-cyan-500 text-white font-bold'>
            <h1 className="text-2xl">Church Inventory Management</h1>
            <div className=" flex ">
                <h1 className=" mr-8 ">Username</h1>
                <Link to='/'><h1 onClick={handleSignout}>Sign Out</h1></Link>
            </div>
        </div>
    )
}
