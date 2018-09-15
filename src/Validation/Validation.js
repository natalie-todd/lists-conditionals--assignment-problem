import React from 'react';

import './Validation.css';

const Validation = (props) => {
    let validationMessage = 'Text long enough';

    if (props.length <= 5) {
        validationMessage = 'Text too short!';
    } 
    return (
        <div className='Validation'>
                    <p>{ validationMessage }</p> 
        </div>
    )
};

export default Validation; 