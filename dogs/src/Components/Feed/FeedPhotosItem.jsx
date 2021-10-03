import React from 'react'
import Style from "./FeedPhotosItem.module.css"

function FeedPhotosItem({ foto, key, setModalPhoto }) {

    function handleClick(item) {
        console.log(item)
        setModalPhoto(item)
    }

    return (
        <>
            <li key={key} className={Style.photo} onClick={() => handleClick(foto)}>
                <img src={foto.src} alt={foto.title} />
                <span>{foto.acessos}</span>
            </li>

        </>
    )
}

export default FeedPhotosItem
