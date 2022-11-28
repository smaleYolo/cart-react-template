import React from 'react';

import './style.scss'

const ButtonDelete = ({deleteProduct}) => {
    return (
        <button type="button" onClick={deleteProduct}>
            <img src='/img/icons/cross.svg' alt="Delete"/>
        </button>
    );
};

export default ButtonDelete;