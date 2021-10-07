import React from 'react'
import { UserContext } from "../../UserContext"
import PhotosComentsForm from './PhotoComentsForm'
import Style from "./PhotoComents.module.css"

function PhotoComents({ coments, id }) {
    const [comentario, setComentario] = React.useState(() => coments)
    const { login } = React.useContext(UserContext)
    const CommentsSection = React.useRef(null)

    React.useEffect(() => {
        console.log(CommentsSection.current.scrollTop = CommentsSection.current.scrollHeight)
    }, [comentario])

    return (
        <div className={Style.ComentarioContainer} ref={CommentsSection}>
            <ul>
                {comentario && comentario.map(comment => (
                    <>
                        <li key={comment.comment_ID + Math.random()}> <span key={comment.comment_ID + 2} className={Style.AuthorName}>{comment.comment_author}</span>: {comment.comment_content}</li>
                    </>
                ))}
            </ul>
            {login && <PhotosComentsForm id={id} Comentarios={comentario} setComentarios={setComentario} />}
        </div>
    )
}

export default PhotoComents