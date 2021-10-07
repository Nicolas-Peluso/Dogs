import React from 'react'
import Style from "./FeedPhotosItem.module.css"
import Image from '../helper/Image'
function FeedPhotosItem({ foto, id, setModalPhoto }) {

    function handleClick(item) {
        console.log(item)
        setModalPhoto(item)
    }

    return (
        <>
            <li key={id} className={Style.photo} onClick={() => handleClick(foto)}>
                <Image src={foto.src} alt={foto.title} />
                <span>{foto.acessos}</span>
            </li>
        </>
    )
}

export default FeedPhotosItem
