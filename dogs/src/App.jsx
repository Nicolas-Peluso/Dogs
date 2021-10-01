import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Longin from './Components/Login/Longin'
import "./App.css"
import { UserStorage } from './UserContext'

function App() {
    return (
        <>
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login/*" element={<Longin />} />
                    </Routes>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </>
    )
}

export default App
