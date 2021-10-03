import React from 'react'
import { UserContext } from '../../UserContext'
import { NavLink, useLocation } from "react-router-dom"
import { ReactComponent as MinasFotos } from "../../Assets/feed.svg"
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg"
import { ReactComponent as Adicionar } from "../../Assets/adicionar.svg"
import { ReactComponent as Sair } from "../../Assets/sair.svg"
import Style from "./UserNavHeader.module.css"
import UseMedia from '../../Hook/useMedia'

function UserNavHeader() {
    const { logout } = React.useContext(UserContext)
    const mobile = UseMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = React.useState(false)

    const { pathname } = useLocation();

    React.useEffect(() => {
        setMobileMenu(!mobileMenu)
    }, [pathname])

    return (<>

        {mobile && <button onClick={() => setMobileMenu(!mobileMenu)}
            className={`${Style.mobilebutton} ${mobileMenu ? Style.ativo : ''}`}
        ></button>}
        <nav className={`${mobile ? Style.Mobile : Style.Nav} ${mobileMenu && Style.mobileAtivo}`}>
            <NavLink to="/conta" end><MinasFotos />{mobile && 'Minhas fotos'}</NavLink>
            <NavLink to="/conta/estatisticas"><Estatisticas />{mobile && 'Estattisticas'}</NavLink>
            <NavLink to="/conta/postar"><Adicionar />{mobile && 'Adicionar foto'}</NavLink>
            <button onClick={logout}><Sair />{mobile && 'Sair'}</button>
        </nav>
    </>
    )
}

export default UserNavHeader
