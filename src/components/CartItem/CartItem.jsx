import React, { useContext } from "react";
import './CartItem.css'
import { MdRemoveShoppingCart } from "react-icons/md";
import AppContext from '../Context/AppContext'




function CartItem ({data}) {

    const {id, title, price, thumbnail} = data;
    const {cartItem, setCartItem} = useContext(AppContext)

    const format = {
        style: 'currency',
        currency: 'BRL'
    }

    const handleRemoveItem = () => {
        const updatedCart = cartItem.filter(item => item.id !== id);
        setCartItem(updatedCart);
    }


    return (
        
        <section className="cart_cotanier">
            <img src={thumbnail} alt="imagem do produto" className="cart_img"/>

            <div className="cart_info">
            <div className="title" >{title}</div>
            <div className="cart_price" >{price.toLocaleString('pt-BR', format)}</div>
            </div>

            <button className="cart_buttom" onClick={handleRemoveItem}>
            <MdRemoveShoppingCart /> 
            </button>
        </section>
        
    
    )
}

export default CartItem