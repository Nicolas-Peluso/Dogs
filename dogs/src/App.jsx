import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Longin from './Components/Login/Longin'
import "./App.css"
import { UserStorage } from './UserContext'
import User from "./Components/usuario/Use"

function App() {
    return (
        <div>
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login/*" element={<Longin />} />
                        <Route path="conta/*" element={<User />} />
                    </Routes>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </div>
    )
}

export default App
