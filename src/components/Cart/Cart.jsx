import React, { useContext } from "react";
import './Cart.css'
import CartItem from "../CartItem/CartItem";
import AppContext from '../Context/AppContext'


function Cart () {
    const {cartItem, isVisible} = useContext(AppContext)
    const format = {
        style: 'currency',
        currency: 'BRL'
    }

    const totalPrice = cartItem.reduce((acc, item) => {
        return item.price + acc
    }, 0)

    return (

        <section className={`cart_contanier ${isVisible ? 'cart-active' : ''} `}>

            { cartItem.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/> ) }

            <div className="resumo">{totalPrice.toLocaleString('pt-BR', format)}</div>
            
        </section>
    )
}

export default Cart