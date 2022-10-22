import React from 'react'
import classes from './ProductCard.module.scss' // Stylesheet
import {motion} from 'framer-motion' // Import Framer-Motion for img/icon
import { Col } from 'reactstrap' // Import column from Reactstrap
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
  return (
    /* lg='3' md='4' */
    <Col key={item.id} lg='3' md='4'>
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
                <motion.span whileTap={{scale: 1.2}}> 
                    <i className="ri-add-line"></i>
                </motion.span>
            </div>
        </div>
    </Col>
  )
}

export default ProductCard