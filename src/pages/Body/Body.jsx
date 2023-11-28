
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Register } from '../Register/Register'
import { Profile } from '../Profile/Profile'
import { Login } from '../Login/Login'
import {Contact} from '../Contact/Contact'
import {Counter} from '../Contador/Contador'

export const Body = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to={"/"}/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<Profile />}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/Contador" element={<Counter/>}/>
            </Routes>
        </>
    )
}