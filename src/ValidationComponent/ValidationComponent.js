import React from 'react';

import './Input.css';

const input = (props) => {
    return (
        <div className='Input'>            
            <input type='text' onChange={props.changed} value={props.paragraph}/>
            <p>{props.paragraph}</p>
        </div>
    )
};

export default input; 