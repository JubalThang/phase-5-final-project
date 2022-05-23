import { Route, Routes } from "react-router-dom";
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import Department from "./Department";
import Items from "./Items";
import NewDepartmentForm from "./Department/NewDepartmentForm";
import NewItemForm from "./Item/NewItemForm";
import Users from "./Users/Users";
import CreateNewUser from "./Users/CreateNewUser";
import { useEffect, useState } from "react";
import { UsersContext } from "./Context/AppContexts";

export default function Home() {

    const [users, setUsers] = useState(null)

    useEffect(() => {
        fetch('/api/users')
            .then(res => {
                if (res.ok) {
                    res.json().then(users => setUsers(users))
                }
                else {
                    res.json().then(error => console.error(error))
                }
            })
    }, [])

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <UsersContext.Provider value={{ users, setUsers }}>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/departments' element={<Department />} />
                        <Route path='/items' element={<Items />} />
                        <Route path='/create_new_department' element={<NewDepartmentForm />} />
                        <Route path='/create_new_item' element={<NewItemForm />} />
                        <Route path='/members' element={<Users />} />
                        <Route path='/add_user' element={<CreateNewUser />} />
                    </Routes>
                </UsersContext.Provider>
            </div>
        </div>
    )
}