import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const User = ({ user }) => {
    const { login, avatarUrl, name } = user

    return (
        <Link to={`/${login}`}>
            <img src={avatarUrl} alt={login} width="72" height="72" />
            <h3>
                {login} {name && <span>({name})</span>}
            </h3>
        </Link>
    )
}

User.propTypes = {
    user: PropTypes.shape({
        login: PropTypes.string.isRequred,
        avatarUrl: PropTypes.string.isRequred,
        name: PropTypes.string
    }).isRequred
}

export default User