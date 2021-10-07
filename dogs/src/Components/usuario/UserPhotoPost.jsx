import React from 'react'
import Style from "./UserPhotoPost.module.css"
import InputComponent from "../Form/InputComponent"
import ButtonForm from "../Form/ButtonForm"
import useForm from "../../Hook/useForm"
import useFetch from "../../Hook/useFetch"
import { PHOTO_POST } from "../../services/api"
import ErrorComponete from '../helper/ErrorComponete'
import { useNavigate } from "react-router-dom"

function UserPhotoPost() {
    const nome = useForm(false)
    const peso = useForm('peso')
    const Idade = useForm("Idade")
    const [img, setImg] = React.useState({})
    const { data, erro, Loading, request } = useFetch()
    const navigate = useNavigate()

    React.useEffect(() => {
        if (data)
            navigate("/conta")
    }, [data, navigate])

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()

        formData.append('img', img.raw)
        formData.append('nome', nome.value)
        formData.append('peso', peso.value)
        formData.append('idade', Idade.value)
        if (!!nome.erro === false && !!Idade.erro === false && !!peso.erro === false) {
            const { url, options } = PHOTO_POST(formData, localStorage.getItem("TOKEN"))
            request(url, options)
        }
    }

    function handleImgChange({ target }) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0]
        })
    }

    return (
        <section className={`${Style.photPost} animeLeft`}>
            <form onSubmit={handleSubmit}>
                <InputComponent label="Nome" type="text" name="Nome" {...nome} />
                <InputComponent label="Peso" type="number" name="Peso" {...peso} />
                <InputComponent label="idade" type="number" name="idade" {...Idade} />
                <input className={Style.file} type="file" name="img" onChange={handleImgChange} />
                {Loading ? <ButtonForm disabled style={{ opacity: .5 }}>Enviando</ButtonForm> :
                    <ButtonForm>Postar</ButtonForm>}
            </form>
            {img.preview && <div className={Style.preview} style={{ backgroundImage: `url(${img.preview})` }}></div>}
            {erro && <ErrorComponete error={erro} />}
        </section>
    )
}

export default UserPhotoPost
