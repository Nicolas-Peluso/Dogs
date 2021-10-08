import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import { UserContext } from '../../UserContext'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost'
import LoginResetar from './LoginResetar'
import Style from "./Login.module.css"
function Longin() {
    const { login } = React.useContext(UserContext)

    if (login) {
        return <Navigate to="/conta" />
    }
    return (
        <section className={Style.login}>
            <div className={Style.form}>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="criar" element={<LoginCreate />} />
                    <Route path="perdeu" element={<LoginPasswordLost />} />
                    <Route path="resetar" element={<LoginResetar />} />
                </Routes>
            </div>
        </section>
    )
}

export default Longin
