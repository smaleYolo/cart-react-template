import React from 'react';
import formatPrice from "../../utils/priceFormatter";

import './style.scss'

import Count from "../Count";
import ButtonDelete from "../ButtonDelete";



const Product = ({product, deleteProduct, increase, decrease, changeValue}) => {
    const {img, title, count, id, price} = product;

    return (
        <section className="product">
            <div className="product__img">
                <img src={`img/products/${img}`} alt={title}/>
            </div>
            <div className="product__title">
                {title}
            </div>

            <div className="product__count">
                <Count count={count}
                       id={id}
                       increase={increase}
                       decrease={decrease}
                       changeValue={changeValue}
                />
            </div>

            <div className="product__price">
                {formatPrice(price * count)} руб.
            </div>
            <div className="product__controls">
                <ButtonDelete deleteProduct={() => deleteProduct(id)}/>
            </div>
        </section>
    );
};

export default Product;