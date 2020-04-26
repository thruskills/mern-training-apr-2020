import React from 'react';
import PropTypes from 'prop-types';

function Comment({author, message, likes}){
    return (
        <div>
            <div className="author">{author}</div>
            <div className="message">{message}</div>
            <div className="likes">{likes ? likes : 0}</div>
        </div>
    )
}

// We can set the propTypes
Comment.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number
}

export default Comment;