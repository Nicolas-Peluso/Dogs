import React from 'react'
import UserNavHeader from './UserNavHeader'
import Style from "./UserHeader.module.css"
import { useLocation } from "react-router-dom"

function UserHeader() {
    const location = useLocation()

    const [title, setTitle] = React.useState('')

    React.useEffect(() => {
        const { pathname } = location
        switch (pathname) {
            case "/conta/estatisticas":
                setTitle("Estatisticas")
                break;
            case "/conta":
                setTitle("Minha Conta")
                break;
            case "/conta/postar":
                setTitle("postar Foto")
                break;
            default:
                setTitle("Sorry Something was wrong")
        }
    }, [location])

    return (
        <header className={Style.header}>
            <h1 className="title">{title}</h1>
            <UserNavHeader />
        </header>
    )
}

export default UserHeader
