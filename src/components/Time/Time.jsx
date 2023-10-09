import React from 'react';

const Time = (props) => {
    return (
        <div>
            <h3>Spent time on read: {props.totalCount} min </h3>
        </div>
    );
};

export default Time;