import React from 'react'
import { useParams } from 'react-router'
import Feed from "../Feed/Feed"
import PropTypes from "prop-types"

function UserProfile() {
    const { user } = useParams()
    return (
        <section className="container">
            <h1 className="title">{user}</h1>
            <Feed user={user} />
        </section>
    )
}

Feed.defaultProps = {
    User: 0
}

Feed.PropTypes = {
    user: PropTypes.oneOfType(PropTypes.string.isRequired, PropTypes.number.isRequired)
}

export default UserProfile
