import React from 'react';

import './ValidationComponent.css';

const ValidationComponent = (props) => {
    return (
        <div className='ValidationComponent'>            
            <p>{props.length}</p>
        </div>
    )
};

export default ValidationComponent; 