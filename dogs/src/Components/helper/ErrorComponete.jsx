import React from 'react'

function ErrorComponete({ error }) {
    if (!error) return null
    console.log(error)
    return (
        <p style={{ color: "red" }}>
            {error}
        </p>
    )
}

export default ErrorComponete
