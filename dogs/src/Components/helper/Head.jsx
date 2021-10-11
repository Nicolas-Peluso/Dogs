import React from 'react'

function Head(props) {
    console.log(props.title)
    React.useEffect(() => {
        document.title = 'Dogs | ' + props.title
    }, [props])

    return (
        <>

        </>
    )
}

export default Head
