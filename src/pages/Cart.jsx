import React from "react";
import '../styles/Cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import {Container, Row, Col} from 'reactstrap'
import {motion} from 'framer-motion'
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";



const Cart = () => {
   // Take the cartItems from the slicer
   const cartItems = useSelector(state => state.cart.cartItems)
   // Take the totalAmount from the slicer
   const totalAmount = useSelector(state => state.cart.totalAmount)


   return (
      <Helmet title='Cart'>
         {/* CommonSection */}
         <CommonSection title="Shopping Cart" />
         {/* Section */}
         <section>
            {/* Container */}
            <Container>
               {/* Row */}
               <Row>
                  {/* lg='9' */}
                  <Col lg='9'>
                     {
                        cartItems.length === 0 ? (
                           /* No item */
                           <h2 className="fs-4 text-center">No item added to the cart</h2>
                        ) : (
                           /* table bordered */
                           <table className="table bordered">
                              {/* Header */}
                              <thead>
                                 {/* Table Row with the heading */}
                                 <tr>
                                    {/* Img */}
                                    <th>Image</th>
                                    {/* Title */}
                                    <th>Title</th>
                                    {/* Price */}
                                    <th>Price</th>
                                    {/* Qty */}
                                    <th>Qty</th>
                                    {/* Delete */}
                                    <th>Delete</th>
                                 </tr>
                              </thead>
                              {/* Body */}
                              <tbody>
                                 {
                                    cartItems.map((item, index) => {
                                       return <Tr item={item} key={index} />
                                    })
                                 }
                              </tbody>
                           </table>
                        )
                     }
                  </Col>
                  {/* lg='3' */}
                  <Col lg='3'>
                     <div>
                        <h6 className="d-flex align-items-center justify-content-between">
                           Subtotal
                           {/* totalAmount */}
                           <span className="fs-4 fw-bold">${totalAmount}</span>
                        </h6>
                     </div>
                     {/* Taxes text */}
                     <p className="fs-6 mt-2">Taxes and shipping will calculate in checkout</p>
                     {/* buy_btn */}
                     <div>
                        {/* Checkout */}
                        <button className="buy_btn w-100">
                           <Link to='/checkout'>Checkout</Link>
                        </button>   
                        {/* Continue */}
                        <button className="buy_btn w-100 mt-3">
                           <Link to='/shop'>Continue Shopping</Link>
                        </button>                     
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

// Create the dynamic Table Row
const Tr = ({item}) => {
   console.log(item);
   // Destructuring of Item
   const {id, image, price, productName, quantity} = item

      // Create the variable for dispatch method
      const dispatch = useDispatch()
     // Delete Product handler fn

      const deleteProduct = () => {
         // Action.payload === item.id (id in this case because I can use destructuring)
         dispatch(cartActions.deleteItem(id))
      }

   return (
      <tr>
         {/* Img */}
         <td>
            <img src={image} alt={productName} />
         </td>
         {/* Title */}
         <td>{productName}</td>
         {/* Price */}
         <td>${price}</td>
         {/* Qty */}
         <td>{quantity}px</td>
         {/* Delete */}
         <td>
            <motion.i onClick={deleteProduct} whileTap={{scale:1.2}} className="ri-delete-bin-line"></motion.i>
         </td>
      </tr>
   )
}

export default Cart;
