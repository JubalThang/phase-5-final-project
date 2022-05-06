import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({ currentUser, setCurrentUser }) {
    const navigate = useNavigate()

    function handleSignout() {
        fetch('/api/logout', {
            method: 'DELETE',
        })
            .then(res => {
                if (res.ok) {
                    setCurrentUser(false)
                    navigate('/')
                } else {
                    console.error('Something went wrong')
                }
            })
    }
    return (
        <div className='flex justify-between h-16 px-8 items-center bg-cyan-500 text-white font-bold'>
            <h1 className="text-2xl">Church Inventory Management</h1>
            <div className=" flex items-center ">
                <div className='flex flex-col mr-4'>
                    <div className=' text-base '>{currentUser.email}</div>
                    <div className=' text-sm opacity-80'>{currentUser.church.name}</div>
                </div>
                <Link to='/'><h1 onClick={handleSignout} className=' rounded bg-cyan-800 hover:border hover:bg-cyan-500 px-3 py-2'>Sign Out</h1></Link>
            </div>
        </div>
    )
}
