import './Products.css'
import React, { useState, useEffect, useContext } from 'react';
import fetchProducts from '../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../Context/AppContext';





function Products () {

    const {products, setProducts} = useContext(AppContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response);
            setLoading(false)
        })
    
    }, []);


    return (

        (loading ? <Loading /> : 
        <section className="card">
        { products.map((product) =>  <ProductCard key={product.id} data={product} />)}
     </section>  )


    )
}

export default Products