import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/Common.css'
import '../styles/product-details.css'
import {motion} from 'framer-motion'


const ProductDetail = () => {

   // The tab state
   const [tab, setTab] = useState('desc')


   // Take the ID from useParams hook
   const {id} = useParams()
   console.log(id);
   // Save, on a new variable, the filtered item where
   // (into products data) the single item id was equal to the id (useParams)
   const product = products.find(item => item.id === id)
   
   // Execute the destructuring of product
   const {imgUrl, productName, price, avgRating, reviews, description, shortDesc} = product



   return (
      <Helmet title={productName}>
         {/* CommonSection component */}
         <CommonSection title={productName}/>
         {/* Product Detail Section */}
         <section className="pt-0">
            {/* Container */}
            <Container>
               {/* Row */}
               <Row>
                  {/* lg="6" */}
                  <Col lg="6">
                     <img src={imgUrl} alt={productName} />
                  </Col>
                  {/* lg="6" */}
                  <Col lg="6">
                     {/* product_details */}
                     <div className="product_details">
                        {/* Title */}
                        <h2>{productName}</h2>
                        {/* product_rating */}
                        <div className="product_rating d-flex align-items-center gap-5 mb-3">
                           {/* Stars */}
                           <div>
                              <span><i className="ri-star-s-fill"></i></span>
                              <span><i className="ri-star-s-fill"></i></span>
                              <span><i className="ri-star-s-fill"></i></span>
                              <span><i className="ri-star-s-fill"></i></span>
                              <span><i className="ri-star-half-s-line"></i></span>
                           </div>
                           {/* avgRating */}
                           <p>(<span>{avgRating}</span> ratings)</p>
                        </div>
                        {/* price */}
                        <span className="product_price">${price}</span>
                        {/* shortDesc */}
                        <p className="mt-3">{shortDesc}</p>
                        <motion.button whileTap={{scale: 1.2}} className="buy_btn">Add to Cart</motion.button>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
         {/* Tab wrapper */}
         <section>
            {/* Container Component */}
            <Container>
               {/* Row Component */}
               <Row>
                  {/* lg='12' */}
                  <Col lg='12'>
                     {/* tab_wrapper d-flex align-items-center gap-5 */}
                     <div className="tab_wrapper d-flex align-items-center gap-5">
                        {/* Description */}
                        <h6 className={`${tab === 'desc' ? 'active_tab' : ''}`} onClick={() => setTab('desc')}>Description</h6>
                        {/* Reviews */}
                        <h6 className={`${tab === 'rev' ? 'active_tab' : ''}`} onClick={() => setTab('rev')}>Reviews ({reviews.length})</h6>
                     </div>
                     {
                        tab === 'desc' ? (
                           /* tab_content mt-5 */
                           <div className="tab_content mt-5">
                              <p>{description}</p>
                           </div>
                        ) : (
                           /* product_review mt-5 */
                           <div className="product_review mt-5">
                              {/* review_wrapper */}
                              <div className="review_wrapper">
                                 <ul>
                                    {
                                       reviews.map((item, index) => {
                                          return(
                                             <li key={index} className="mb-4">
                                                <h6>John Doe</h6>
                                                <span>{item.rating}(rating)</span>
                                                <p>{item.text}</p>
                                             </li>
                                          )
                                       })
                                    }
                                 </ul>
                                 {/* review_form */}
                                 <div className="review_form">
                                    <h4>Leave your Experience</h4>
                                    <form action="">
                                       {/* form_group */}
                                       <div className="form_group">
                                          <input type="text" placeholder="Enter Name" />
                                       </div>
                                       {/* form_group */}
                                       <div className="form_group">
                                          <span>1 <i className="ri-star-s-fill"></i></span>
                                          <span>2 <i className="ri-star-s-fill"></i></span>
                                          <span>3 <i className="ri-star-s-fill"></i></span>
                                          <span>4 <i className="ri-star-s-fill"></i></span>
                                          <span>5 <i className="ri-star-s-fill"></i></span>
                                       </div>
                                       {/* form_group */}
                                       <div className="form_group">
                                          <textarea rows={4} type="text" placeholder="Review Message" />
                                       </div>                                       
                                    </form>   
                                 </div>
                              </div>
                           </div>
                        )
                     }

                  </Col>
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default ProductDetail;
