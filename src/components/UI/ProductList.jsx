import React, {Fragment} from 'react'
import ProductCard from './ProductCard'


const ProductList = ({data}) => {
  return (
    /* Passing data through props */
    /* At the moment the data are stored on Home.jsx */
    /* So it goes through components like this => Home > ProductList > ProductCard */
    <Fragment> 
      {
        data?.map((item, index) => <ProductCard key={index} item={item} />)
      }
    </Fragment>
  )
}

export default ProductList