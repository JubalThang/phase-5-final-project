import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

export default function Unauthernticated({setCurrentUser}) {
    return (
        <>
        <Routes>
            <Route path="/" element={<Login setCurrentUser={setCurrentUser} />} />
            <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />} />
        </Routes>
        </>
    )
}