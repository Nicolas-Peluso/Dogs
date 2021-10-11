import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Longin from './Components/Login/Longin'
import "./App.css"
import { UserStorage } from './UserContext'
import User from "./Components/usuario/Use"
import Photo from './Components/Photo/Photo'
import UserProfile from './Components/usuario/UserProfile'
import NotFound from './Components/NotFound'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <main className="AppBody">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="login/*" element={<Longin />} />
                            <Route path="conta/*" element={<User />} />
                            <Route path="foto/:id" element={<Photo />} />
                            <Route path="perfil/:user" element={<UserProfile />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </div>
    )
}

export default App
