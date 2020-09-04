import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({data}) => {
    return (
        <div>
            Sidebar Stylé!!
            {data && data}
        </div>
    )
}

Sidebar.propTypes = {
data : PropTypes.string.isRequired,
}

export default Sidebar
