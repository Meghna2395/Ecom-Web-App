import React from 'react'
import { Route } from 'react-router-dom'
import ProductTabs from './ProductTabs'
import SingleProduct from './SingleProduct'

const ProductPageMain = () => {
    return (
        <div>
            <SingleProduct/>
            <ProductTabs/>
        </div>
    )
}

export default ProductPageMain
