import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CurrentUser } from '../Context/AppContexts'

export default function Profile() {
  const {currentUser} = useContext(CurrentUser)
  return (
    <>
      <Link to='/'><div className=" primary w-16 m-4 "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg></div></Link>
      <div className=" w-1/2 m-auto ">
        <div className="flex justify-center">
          <div className="w-40 h-40 bg-orange-400 rounded-full border-2 border-gray-400"></div>
        </div>
        <div className=" text-center ">
          <h1 className=' m-8'>Email : {currentUser.email} </h1>
          <h1 className=' m-8'>Church : {currentUser.church.name} </h1>
        </div>
      </div>
    </>
  )
}
