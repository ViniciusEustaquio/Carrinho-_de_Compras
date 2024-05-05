
import { FaShoppingCart } from "react-icons/fa";
import propTypes from 'prop-types'
import React, { useContext } from "react";
import AppContext from "../Context/AppContext";

import './ProductCard.css'

function ProductCard ({data} ) {
    const {title, price, thumbnail} = data
    const realFormat = {
        style: 'currency',
        currency: 'BRL'
    }

    const {cartItem, setCartItem} = useContext(AppContext)

    const handleAddCart = () => {
        setCartItem([...cartItem, data]); 
    }

    return (
        <section className="card_contanier">

        <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="imagem" className='card_img' />

        <div className='card_info'>
            <h2 className='price'>
                {price.toLocaleString('pt-BR', realFormat)}
            </h2>
            <h2 className='title'>
                {title}
            </h2>
        </div>  

        <button className='card_buttom' onClick={handleAddCart}>
        <FaShoppingCart />
        </button>
        </section>
    )
}

export default ProductCard

ProductCard.prototype = {
    data: propTypes.shape({}),
}.isRequerid;

