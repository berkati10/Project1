import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => {
    return (
        <div>
            Ceci est un Footer : {props.logo}
        </div>
    )
}

Footer.propTypes = {
logo : PropTypes.string.isRequired,
}

export default Footer
