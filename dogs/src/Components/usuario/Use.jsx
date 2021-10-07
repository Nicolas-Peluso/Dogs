import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Feed from '../Feed/Feed'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

function User() {
    const { login, data } = React.useContext(UserContext)

    if (login === false) return <Navigate to="/login" />
    console.log(!!login)
    return (
        <div>
            {login && <section className="container">
                <UserHeader />
                <Routes>
                    <Route path="/" element={<Feed user={data.id} />} />
                    <Route path="postar" element={<UserPhotoPost />} />
                    <Route path="estatisticas" element={<UserStats />} />
                </Routes>
            </section>}
        </div>
    )
}

export default User
