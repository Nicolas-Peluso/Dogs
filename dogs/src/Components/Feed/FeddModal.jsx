import React from 'react'
import useFetch from '../../Hook/useFetch'
import { PHOTO_GET } from '../../services/api'
import Style from "./FeddModal.module.css"


function FeddModal({ foto }) {
    const { data, Loading, erro, request } = useFetch()

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(foto.id)

        request(url, options)

    }, [foto, request])
    console.log(foto)
    return (
        <section className={Style.FeedModal}>
            <img src={foto.src} alt="desculpe" />
        </section>
    )
}

export default FeddModal
