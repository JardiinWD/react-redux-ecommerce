import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import '../styles/checkout.css'
import { useSelector } from "react-redux";


const Checkout = () => {

   // save the totalQuantity state prop on a variable
   const totalQty = useSelector(state => state.cart.totalQuantity)
   // save the totalAmount state prop on a variable
   const totalAmount =  useSelector(state => state.cart.totalAmount)

   return (
      /* Helmet */
      <Helmet title="Checkout">
         {/* CommonSection */}
         <CommonSection title="Checkout" />
         <section>
            {/* Container */}
            <Container>
               {/* Row */}
               <Row>
                  {/* lg='8' Billing Information */}
                  <Col lg='8'>
                     {/* mb-4 fw-bold */}
                     <h6 className="mb-4 fw-bold">Billing Information</h6>
                     {/* Form */}
                     {/* FIXME: Create a new component, the name should be FormCheckout */}
                     <Form className="billing_form">
                        {/* FormGroup | name */}
                        <FormGroup className="form_group">
                           <input type="text" placeholder="Enter your name" />
                        </FormGroup>
                        {/* FormGroup | email */}
                        <FormGroup className="form_group">
                           <input type="email" placeholder="Enter your email" />
                        </FormGroup>
                        {/* FormGroup | Phone number */}
                        <FormGroup className="form_group">
                           <input type="number" placeholder="Phone number" />
                        </FormGroup>
                        {/* FormGroup | Street Address */}
                        <FormGroup className="form_group">
                           <input type="text" placeholder="Street Address" />
                        </FormGroup>
                        {/* FormGroup | City */}
                        <FormGroup className="form_group">
                           <input type="text" placeholder="City" />
                        </FormGroup>
                        {/* FormGroup | Postal Code */}
                        <FormGroup className="form_group">
                           <input type="text" placeholder="Postal Code" />
                        </FormGroup>
                        {/* FormGroup | Country */}
                        <FormGroup className="form_group">
                           <input type="text" placeholder="Country" />
                        </FormGroup>
                     </Form>
                  </Col>
                  {/* lg='4' / Checkout cart */}
                  <Col lg='4'>
                     {/* checkout_cart */}
                     <div className="checkout_cart">
                        {/* Total Qty */}
                        <h6>Total Qty: <span>{totalQty}</span></h6>
                        {/* Subtotal */}
                        {/* TODO: Create an utils that format the amounts */}
                        <h6>Subtotal: <span>${totalAmount}</span></h6>
                        {/* Shipping */}
                        <h6>
                           <span>Shipping : <br /> Free Shipping</span>
                           <span>$0</span>
                        </h6>   
                        {/* Total Cost */}
                        <h4>Total Cost: <span>${totalAmount}</span></h4>  
                        {/* buy_btn auth_btn W-100 */}                     
                        <button className="buy_btn auth_btn w-100">
                           Place an order
                        </button>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default Checkout;
