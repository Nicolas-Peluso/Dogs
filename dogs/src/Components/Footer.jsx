import React from 'react'
import Style from "./Footer.module.css"
import { ReactComponent as Dogs } from "./../Assets/dogs-footer.svg"

function Footer() {
    return (
        <footer className={Style.Footer}>
            <Dogs />
            <p>Dogs, alguns direitos reservados ©</p>
        </footer>
    )
}

export default Footer
