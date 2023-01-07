import React from 'react';

import './style.scss'

const Count = ({id, count, increase, decrease, changeValue}) => {
    return (
        <div className="count">
            <div className="count__box">
                <input type="number" className="count__input"
                       min="1"
                       max="100"
                       value={count}
                       onChange={(e) => changeValue(+e.target.value, id)}
                />
            </div>
            <div className="count__controls">
                <button className="count__up" type="button" onClick={() => increase(id)}>
                    <img src='img/icons/icon-up.svg' alt="Increase"/>
                </button>
                <button className="count__down" type="button" onClick={() => decrease(id)}>
                    <img src='img/icons/icon-down.svg' alt="Decrease"/>
                </button>
            </div>
        </div>
    );
};

export default Count;