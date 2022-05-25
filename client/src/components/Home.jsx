import { Route, Routes } from "react-router-dom";
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import Department from "./Department";
import Items from "./Items";
import NewDepartmentForm from "./Department/NewDepartmentForm";
import NewItemForm from "./Item/NewItemForm";
import Users from "./Users/Users";
import CreateNewUser from "./Users/CreateNewUser";

export default function Home() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/departments' element={<Department />} />
                    <Route path='/items' element={<Items />} />
                    <Route path='/create_new_department' element={<NewDepartmentForm />} />
                    <Route path='/create_new_item' element={<NewItemForm />} />
                    <Route path='/members' element={<Users />} />
                    <Route path='/add_user' element={<CreateNewUser />} />
                </Routes>
            </div>
        </div>
    )
}