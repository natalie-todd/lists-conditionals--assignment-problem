import React from 'react';

import './Input.css';

const input = (props) => {
    return (
        <div className='Input'>            
            <input type='text' onChange={props.changed} value={props.name}/>
            <p>{props.children}</p>
        </div>
    )
};

export default input; 