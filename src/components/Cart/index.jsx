import React, {useState} from 'react';

import CartHeader from "../CartHeader";
import Product from "../Product";
import CartFooter from "../CartFooter";

import data from './../../data';

const Cart = () => {
    const [cart, setCart] = useState(data)

    const deleteProduct = (id) => {
        setCart(prev => prev.filter(item => item.id !== id))
    }

    const increase = (id) => {
        setCart(prev => prev.map(item => {
            if (item.id === id){
                return {
                    ...item,
                    count: ++item.count,
                }
            }
            return item
        }))
    }

    const decrease = (id) => {
        setCart(prev => prev.map(item => {
            if(item.id === id && item.count !== 1){
                return {
                    ...item,
                    count: --item.count,
                }
            }
            return item
        }))
    }

    const changeValue = (value, id) => {
        setCart(prev => prev.map(item => {
            if(item.id === id && value !== 0){
                return {
                    ...item,
                    count: value
                }
            }
            return item
        }))
    }


    return (
        <section className="cart">
            <CartHeader/>
            {
                cart.map(product =>
                    <Product
                        key={product.id}
                        product={product}
                        deleteProduct={deleteProduct}
                        increase={increase}
                        decrease={decrease}
                        changeValue={changeValue}
                    />
                )
            }
            <CartFooter cart={cart}/>
        </section>
    );
};

export default Cart;