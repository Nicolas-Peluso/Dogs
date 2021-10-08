import React from 'react'
import Styles from "./Photo.module.css"
import { useParams } from "react-router-dom"
import useFetch from '../../Hook/useFetch'
import { PHOTO_GET } from "../../services/api"
import ErrorComponete from '../helper/ErrorComponete'
import Carregando from '../helper/Carregando'
import PhotoContent from './PhotoContent'

function Photo() {
    const { id } = useParams()
    const { request, erro, data, Loading } = useFetch()

    React.useEffect(() => {
        async function GetPhoto() {
            const { url } = PHOTO_GET(id)
            request(url)
        }
        GetPhoto()
    }, [request, id])
    if (erro)
        return <ErrorComponete error={erro} />
    if (Loading)
        return <Carregando />
    if (data)
        return (
            <section className="container">
                <PhotoContent datad={data} single={true} />
            </section>
        )

    else
        return null
}

export default Photo
