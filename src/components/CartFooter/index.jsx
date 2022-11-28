import React from 'react';
import formatPrice from "../../utils/priceFormatter";

import './style.scss'

const CartFooter = ({cart}) => {
    const itemsCount = cart.reduce((sum, item) => item.count + sum, 0)
    const itemsPrice = cart.reduce((sum, item) => (item.price * item.count) + sum, 0)


    return (
        <footer className="cart-footer">
            <div className="cart-footer__count">{itemsCount} ед.</div>
            <div className="cart-footer__price">{formatPrice(itemsPrice)} руб.</div>
        </footer>
    );
};

export default CartFooter;

