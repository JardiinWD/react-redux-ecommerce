import React, {Fragment} from "react";
import classes from "./Footer.module.scss" // Stylesheet import
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"; // Components import from Reactstrap
import { Link } from "react-router-dom"; // Link component from React-router-dom
import Logo from "../UI/Logo"; // Logo Component

const Footer = () => {
   return (
      <Fragment>
         {/* classes.footer */}
         <footer className={classes.footer}>
            {/* Container */}
            <Container>
               {/* Row */}
               <Row className="justify-content-between">
                  {/* //FIXME: Create a new Components and map the links with props methods */}
                  {/* lg='3' */}
                  <Col lg='3'>
                     {/* footer_quick_links */}
                     <div className={classes.footer_quick_links}>
                        {/* classes.quick_link_title */}
                        <h4 className={classes.quick_link_title}>Top Categories</h4>
                        {/* ListGroup */}
                        <ListGroup className="mb-3">
                           {/* Mobile Phones */}
                           <ListGroupItem className="ps-0 border-0">
                              <Link to='#'>Mobile Phones</Link>
                           </ListGroupItem>
                           {/* Modern Sofa */}
                           <ListGroupItem className="ps-0 border-0">
                              <Link to='#'>Modern Sofa</Link>
                           </ListGroupItem>
                           {/* Arm Chair */}
                           <ListGroupItem className="ps-0 border-0">
                              <Link to='#'>Arm Chair</Link>
                           </ListGroupItem>
                           {/* Smart Watches */}
                           <ListGroupItem className="ps-0 border-0">
                              <Link to='#'>Smart Watches</Link>
                           </ListGroupItem>                           

                        </ListGroup>
                     </div>
                  </Col>
                  {/* //FIXME: Create a new Components and map the links with props methods */}
                  {/* lg='2' */}
                  <Col lg='2'>
                     {/* footer_quick_links */}
                     <div className={classes.footer_quick_links}>
                        {/* classes.quick_link_title */}
                        <h4 className={classes.quick_link_title}>Useful Links</h4>
                        {/* ListGroup */}
                        <ListGroup className="mb-3">
                           {/* Shop */}
                           <ListGroupItem className="ps-0 border-0">
                              <Link to='/shop'>Shop</Link>
                           </ListGroupItem>
                           {/* Cart */}
                           <ListGroupItem className="ps-0 border-0">
                              <Link to='/cart'>Cart</Link>
                           </ListGroupItem>
                           {/* Login */}
                           <ListGroupItem className="ps-0 border-0">
                              <Link to='/login'>Login</Link>
                           </ListGroupItem>
                           {/* Privacy Policy */}
                           <ListGroupItem className="ps-0 border-0">
                              <Link to='#'>Privacy Policy</Link>
                           </ListGroupItem>                           
                        </ListGroup>
                     </div>
                  </Col>
                  {/* //FIXME: Create a new Components and map the links with props methods */}
                  {/* lg='3' */}
                  <Col lg='3'>
                     {/* footer_quick_links */}
                     <div className={classes.footer_quick_links}>
                        {/* classes.quick_link_title */}
                        <h4 className={classes.quick_link_title}>Contact</h4>
                        {/* ListGroup */}
                        <ListGroup className={classes.footer_contacts}>
                           {/* Location */}
                           <ListGroupItem>
                              <span><i className="ri-map-pin-line"></i></span>
                              <p className="ps-1">123 Milan, Italy</p>
                           </ListGroupItem>
                           {/* Phone Contact */}
                           <ListGroupItem>
                              <span><i className="ri-phone-line"></i></span>
                              <p className="ps-1">+0391234567</p>
                           </ListGroupItem>
                           {/* Email Contact */}
                           <ListGroupItem>
                              <span><i className="ri-mail-line"></i></span>
                              <p className="ps-1">example@email.com</p>
                           </ListGroupItem>                         
                        </ListGroup>
                     </div>
                  </Col>                                     
               </Row>
            </Container>
         </footer>
      </Fragment>
   )
};

export default Footer;
