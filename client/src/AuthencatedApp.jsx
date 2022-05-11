

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { DeparmentsContext, ItemsContext } from './components/Context/AppContexts'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Profile from './components/Settings/Profile'

export default function AuthencatedApp() {

    const [departments, setDepartments] = useState(null)
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('/api/departments')
            .then(res => {
                if (res.ok) {
                    res.json().then(d => setDepartments(d))
                }
            })
    }, [])

    useEffect(() => {
        fetch('/api/items')
            .then(res => {
                if (res.ok) {
                    res.json().then(d => setItems(d))
                }
            })
    }, [])

    return (
        <>
            <DeparmentsContext.Provider value={{departments, setDepartments}}>
                <ItemsContext.Provider value={{items, setItems}}>
                    <Navbar />
                    <Routes>
                        <Route path="*" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>

                </ItemsContext.Provider>
            </DeparmentsContext.Provider>
        </>
    )
}