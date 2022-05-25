import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CurrentUser } from './Context/AppContexts'

export default function Navbar() {
    console.log("navbar")
    const navigate = useNavigate()

    const {currentUser, setCurrentUser} = useContext(CurrentUser)

    function handleSignout() {
        fetch('/api/logout', {
            method: 'DELETE',
        })
            .then(res => {
                if (res.ok) {
                    setCurrentUser(null)
                    navigate('/')
                } else {
                    console.error('Something went wrong')
                }
            })
    }
    return (
        <div className='flex justify-between h-16 px-8 items-center bg-cyan-500 text-white font-bold w-screen'>
            <h1 className="text-2xl">Church Inventory Management</h1>
            
            <div className=" flex items-center ">
            <Link to='/profile'>
                <div className='flex flex-col mr-4'>
                    <div className=' text-base '>{currentUser.email}</div>
                    <div className=' text-sm opacity-80 '>{currentUser.church.name}</div>
                </div>
            </Link>
                <Link to='/'><h1 onClick={handleSignout} className=' primary hover:bg-cyan-500 '>Sign Out</h1></Link>
            </div>
        </div>
    )
}
