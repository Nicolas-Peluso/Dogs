import React from 'react'
import useFetch from "../../Hook/useFetch"
import { PHOTOS_GET } from "../../services/api"
import FeedPhotosItem from './FeedPhotosItem'
import ErrorComponent from "../helper/ErrorComponete"
import Carregando from "../helper/Carregando"
import Style from "./FeedPhotos.module.css"

function FeedPhotos({ setModalPhoto, user, page, setInfinite }) {
    const { Loading, data, erro, request } = useFetch()

    React.useEffect(() => {
        async function FetchPhotos() {
            const total = 6
            const { url, option } = PHOTOS_GET({ page, total, user })
            const { res, response } = await request(url, option)
            if (res && res.ok && response.length < total) {
                setInfinite(false)
            }
        }
        FetchPhotos()
    }, [request, setInfinite, user, page])

    if (erro) return <ErrorComponent error={erro} />
    if (Loading) return <Carregando />
    if (data) {
        console.log(data)
        return (
            <>
                <ul className={Style.Feed}>
                    {data.map(foto => <FeedPhotosItem foto={foto} id={foto.id} setModalPhoto={setModalPhoto} />)}

                </ul>

            </>
        )
    }
    else return null
}

export default FeedPhotos
