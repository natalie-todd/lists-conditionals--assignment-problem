import React from 'react';

import './ValidationComponent.css';

const ValidationComponent = (props) => {
    return (
        <div className='ValidationComponent'>
            {
                props.length >= 5 ?
                    <p>Text long enough</p> :
                    <p>Text too short!</p>
            }
        </div>
    )
};

export default ValidationComponent; 