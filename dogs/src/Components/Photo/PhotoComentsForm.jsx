import React from 'react'
import { ReactComponent as Enviar } from "../../Assets/enviar.svg"
import useFetch from "../../Hook/useFetch"
import { COMMENT_POST } from "../../services/api"
import ErrorComponete from '../helper/ErrorComponete'
import Style from "./PhotoComentsForm.module.css"

function PhotoComentsForm({ id, setComentarios }) {
    const [comment, setComents] = React.useState('')
    const { erro, request } = useFetch()

    async function handleSubmit(e) {
        e.preventDefault()
        const { url, options } = COMMENT_POST({ comment }, id)
        const { response, res } = await request(url, options)
        console.log(response)
        if (res.ok)
            setComentarios((Comentarios) => [...Comentarios, response])
    }

    return (
        <form onSubmit={handleSubmit} className={Style.Form}>
            <textarea
                value={comment}
                onChange={({ target }) => {
                    setComents(target.value)
                }}
                id="comments"
                name="comment"
                placeholder="Coment"
                className={Style.TextArea}
            />

            <button type="submit" className={Style.button}>
                <Enviar />
            </button>

            {erro && <ErrorComponete error={erro} />}
        </form>
    )
}

export default PhotoComentsForm
