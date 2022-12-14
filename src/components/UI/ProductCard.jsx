import React from 'react'
import classes from './ProductCard.module.scss' // Stylesheet
import {motion} from 'framer-motion' // Import Framer-Motion for img/icon
import { Col } from 'reactstrap' // Import column from Reactstrap
import { Link } from 'react-router-dom'
//////
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
//////
// Toastify
import { toast } from 'react-toastify'; 


const ProductCard = ({item}) => {

  // I have to attached my useDispatch hook to a new Variable
  const dispatch = useDispatch()

  // My AddToCart function, attached to button
  const addToCartHandler = () => {
    dispatch(cartActions.addItem({
        id: item.id,
        productName: item.productName, // ProductName 
        image: item.imgUrl, // Product Image
        price: item.price, // Product Price   
    }))
    // Managing the successing message
    toast.success('Product Added Succesfully')
  }  
  
    return (
    /* lg='3' md='4' */
    <Col key={item.id} lg='3' md='4' className='mb-2'>
        {/* classes.product_item */ }
        <div className={classes.product_item}>
            {/* classes.product_img */}
            <div className={classes.product_img}>
                <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt={item.productName} />
            </div>
            {/* p-2 */}
            <div className={classes.product_info}>
                {/* classes.product_name */}
                <h3 className={classes.product_name}> 
                    <Link to={`/shop/${item.id}`}>{item.productName}</Link>
                </h3>
                <span>{item.category}</span>
            </div>
            {/* product_card_bottom */}
            <div className={classes.product_card_bottom}>
                {/* price */}
                <span className={classes.product_card_price}>${item.price}</span>
                {/* ri-add-line */}
                <motion.span whileTap={{scale: 1.2}} onClick={addToCartHandler}> 
                    <i className="ri-add-line"></i>
                </motion.span>
            </div>
        </div>
    </Col>
  )
}

export default ProductCard