
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Department from './components/Department'
import Items from './components/Items'
import Navbar from './components/Navbar'
import SideBar from './components/Sidebar'

export default function AuthencatedApp({ currentUser, setCurrentUser }) {
console.log("auth")
    return (
        <>
            <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <div className=" flex ">

                <SideBar />
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="departments" element={<Department currentUser={currentUser}/>} />
                        <Route path="items" element={<Items />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}