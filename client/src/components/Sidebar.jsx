import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CurrentUser } from './Context/AppContexts'

export default function SideBar() {

    const { currentUser } = useContext(CurrentUser)

    const NavBtn = ({ text }) => {
        return (
            <p className="font-bold text-sm px-3 py-2 ">{text}</p>
        )
    }
    return (
        <div className=" flex h-[calc(100vh-64px)]  px-4 bg-gray-50 shadow">
            <div className='flex flex-col text-gray-400 justify-start'>

                <NavLink to="/" className={({ isActive }) => isActive ? 'bg-gray-200 rounded-md text-gray-800 mt-4' : 'mt-4'} ><NavBtn text="Home" /></NavLink>
                <NavLink to="/departments" className={({ isActive }) => isActive ? 'bg-gray-200 rounded-md text-gray-800 mt-4' : 'mt-4'}>
                    <NavBtn text="Departments" />
                </NavLink>

                <NavLink to="/items" className={({ isActive }) => isActive ? 'bg-gray-200 rounded-md text-gray-800 mt-4' : 'mt-4'}>
                    <NavBtn text="Items" />
                </NavLink>

                {
                    currentUser.admin && 
                    <NavLink to="/users" className={({ isActive }) => isActive ? 'bg-gray-200 rounded-md text-gray-800 mt-4' : 'mt-4'}>
                        <NavBtn text="Users" />
                    </NavLink>
                }
            </div>
        </div>
    )
}

