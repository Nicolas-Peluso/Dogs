import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Style from "./PhotoContent.module.css"
import PhotoComents from "./photoComents"
import { UserContext } from '../../UserContext'
import { PHOTO_DELETE } from "../../services/api"
import useFetch from '../../Hook/useFetch'
import Image from '../helper/Image'

function PhotoContent({ datad }) {
    const { login, data } = React.useContext(UserContext)
    const { request, Loading } = useFetch()
    const navigate = useNavigate()

    async function handleDelete(id) {
        const { url, options } = PHOTO_DELETE(id)
        const { res } = await request(url, options)
        if (res.ok)
            navigate('/')
    }

    return (
        <>
            {datad && <div className={Style.photo}>
                <dir className={Style.img}>
                    <Image src={datad.photo.src} alt={datad.photo.title} />
                </dir>
                <div className={Style.details}>
                    <div>
                        <p className={Style.author}>
                            {
                                login && datad.photo.author === data.nome ?
                                    <button className={Style.button}
                                        onClick={() => handleDelete(datad.photo.id)}
                                    >
                                        {Loading ? 'Carregando...' : 'Deletar'}</button>

                                    : <Link to={`/perfil/${datad.photo.author}`}>@{datad.photo.author}</Link>
                            }
                            <span className={Style.visualizacoes}>{datad.photo.acessos}</span>
                        </p>
                        <h1 className="title">
                            <Link to={`/foto/${datad.photo.id}`}>{datad.photo.title}</Link>
                        </h1>
                        <ul className={Style.atributes}>
                            <li>
                                {datad.photo.peso}kg
                            </li>
                            <li>
                                {datad.photo.idade} anos
                            </li>
                        </ul>
                    </div>
                </div>
                <PhotoComents id={datad.photo.id} coments={datad.comments} />
            </div>}
        </>
    )
}

export default PhotoContent
