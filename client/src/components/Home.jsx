import { Route, Routes } from "react-router-dom";
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import Department from "./Department";
import Items from "./Items";

export default function Home() {

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/departments' element={<Department />} />
                    <Route path='/items' element={<Items />} />
                </Routes>
            </div>
        </div>
    )
}