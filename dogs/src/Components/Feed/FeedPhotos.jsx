import React from 'react'
import useFetch from "../../Hook/useFetch"
import { PHOTOS_GET } from "../../services/api"
import FeedPhotosItem from './FeedPhotosItem'
import ErrorComponent from "../helper/ErrorComponete"
import Carregando from "../helper/Carregando"
import Style from "./FeedPhotos.module.css"

function FeedPhotos({ setModalPhoto }) {
    const { Loading, data, erro, request } = useFetch()

    React.useEffect(() => {
        async function FetchPhotos() {
            const { url, option } = PHOTOS_GET({ page: 2, total: 6, user: 0 })
            request(url, option)
        }
        FetchPhotos()
    }, [])

    if (erro) return <ErrorComponent error={erro} />
    if (Loading) return <Carregando />
    if (data) {
        console.log(data)
        return (
            <>
                <ul className={Style.Feed}>
                    {data.map(foto => <FeedPhotosItem foto={foto} key={foto.id} setModalPhoto={setModalPhoto} />)}

                </ul>

            </>
        )
    }
    else return null
}

export default FeedPhotos
