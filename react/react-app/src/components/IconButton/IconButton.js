import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

function IconButton({children}){
    return (
        <span className="icon">
            <img src="/red-dot.png" height="25" width="25" />
            <span>{children}</span>
        </span>
    )
}

IconButton.propTypes = {
    children: PropTypes.string.isRequired
}

export default IconButton;