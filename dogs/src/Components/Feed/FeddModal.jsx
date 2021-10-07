import React from 'react'
import useFetch from '../../Hook/useFetch'
import { PHOTO_GET } from '../../services/api'
import Style from "./FeddModal.module.css"
import ErrorComponent from "../helper/ErrorComponete"
import Carregando from "../helper/Carregando"
import PhotoContent from '../Photo/PhotoContent'

function FeddModal({ foto, setModal }) {
    const { data, Loading, erro, request } = useFetch()

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(foto.id)
        request(url, options)

    }, [foto, request])
    function handleOutsideClick(e) {
        if (e.currentTarget === e.target) {
            setModal(null)
        }
    }
    return (
        <section className={Style.FeedModal} onClick={handleOutsideClick}>
            {erro && <ErrorComponent />}
            {Loading && <Carregando />}
            {data && <PhotoContent datad={data} />}
        </section>
    )
}

export default FeddModal
