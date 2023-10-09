import React from 'react';
import './Bookmark.css'
const Bookmark = (props) => {
    return (
        <div className="bookmark-title">
            <div >
            <h3>{props.bookmark}</h3>
            </div>
        </div>
    );
};

export default Bookmark;