import React, { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import AppContext from '../Context/AppContext'
import './ButtonCar.css'



function ButtonCar () {

    const {cartItem, setIsVisible, isVisible } = useContext(AppContext)

    const totalProdut = cartItem.length;

    return (

        <buttom onClick={() => setIsVisible(!isVisible) } className="button_car" >
        <MdOutlineShoppingCart />
        <span className="status">{totalProdut}</span>   
        </buttom>
    
    )
}


export default ButtonCar