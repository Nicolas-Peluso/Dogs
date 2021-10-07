import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./Header.module.css"
import { ReactComponent as Logo } from "../Assets/dogs.svg"
import { UserContext } from "../UserContext"

function Header() {
    const { login, data } = React.useContext(UserContext)

    return (
        <header className={Style.Header}>
            <nav className={`${Style.Nav} container`}>
                <Link className={Style.Logo} to="/"><Logo aria-label="Dogs - home" /></Link>
                {login ? <Link to="/conta" className={Style.Login}>{data.nome}</Link>
                    : <Link to="/login" className={Style.Login}>login / criar</Link>
                }

            </nav>
        </header>
    )
}

export default Header
