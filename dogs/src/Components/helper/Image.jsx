import React from 'react'
import Style from "./Image.module.css"

function Image(props) {
    const [skeleton, setskeleton] = React.useState(true)

    function handleLoad({ target }) {
        target.style.opacity = 1
        setskeleton(null)
    }
    return (
        <div className={Style.wraper}>
            {skeleton && <div className={Style.Skeleton}></div>}
            <img onLoad={handleLoad} src="" alt="" {...props} className={Style.img} />
        </div>
    )
}

export default Image
