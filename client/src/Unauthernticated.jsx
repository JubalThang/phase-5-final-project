import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import NoMatch from './components/NoMatch';
import Signup from './components/Signup';

export default function Unauthernticated() {
    console.log('Unauthernticated')
    return (
        <>
        <Routes>
            <Route path="/" element={<Login  />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
        </>
    )
}