import React, {useState} from "react";
import AppContext from './AppContext'
import PropTypes from 'prop-types'


function Provider ({ children }) {

const [products, setProducts] = useState([]);
const [cartItem, setCartItem] = useState([]);
const [isVisible, setIsVisible] = useState(false)

const value = {
    products, 
    setProducts,
    cartItem, 
    setCartItem,
    isVisible, 
    setIsVisible,
}

    return (

        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export default Provider

Provider.propTypes = {
    children: PropTypes.any,
  }.isRequired;