import React, {useState, useRef, useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import ProductList from '../components/UI/ProductList'
import '../styles/Common.css'
import '../styles/product-details.css'
import {motion} from 'framer-motion'
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";


const ProductDetail = () => {

   // The tab state
   const [tab, setTab] = useState('desc')
   const [rating, setRating] = useState(null)

   // Take the ID from useParams hook
   const {id} = useParams()
   console.log(id);
   // Save, on a new variable, the filtered item where
   // (into products data) the single item id was equal to the id (useParams)
   const product = products.find(item => item.id === id)
   
   // Execute the destructuring of product
   const {imgUrl, productName, price, avgRating, reviews, description, shortDesc, category} = product
   // Products filter for category
   const relatedProducts = products.filter(item => item.category === category)

   //#region Form Review

   // Review Username
   const reviewUser = useRef('')
   // Review message
   const reviewMsg = useRef('')
   /** Review Form Submit
    * 
    * @param {string} e Current value of useRef
    */
   const submitHandler = (e) => {
      e.preventDefault() // Prevent Refresh on submit
      // Save on a variable the current value of reviewUser
      const reviewUserName = reviewUser.current.value
      // Save on a variable the current value of reviewMsg
      const reviewUserMsg = reviewMsg.current.value
      if (reviewUserName.length === 0 || reviewUserMsg.length === 0) return
      if (reviewUserName.length !== 0 && reviewUserMsg.length !== 0) {
         // Create the review Object
         const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMsg,
            rating,
         }
         toast.success('Review Submitted')
      }

      // Clear all fields after the review was sent
      reviewUser.current.value = ''
      reviewMsg.current.value = ''
      setRating(null)
   }

   //#endregion 

   //#region Cart fn
   const dispatch = useDispatch()
   // Function for add to Cart an item
   const addToCart = () => {
      // Call the dispatch fn
      dispatch(cartActions.addItem({
            id,
            image: imgUrl,
            productName,
            price,
         })
      )
      toast.success('Product added successfully')
   }
   //#endregion

   //#region useEffect
   useEffect(() => {
      window.scrollTo(0,0)
   },[product])
   //#endregion 

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
                  {/* lg="6" | Img */}
                  <Col lg="6">
                     <img src={imgUrl} alt={productName} />
                  </Col>
                  {/* lg="6" | product_details */}
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
                        {/* price and category */}
                        <div className="d-flex align-items-center gap-5">
                           <span className="product_price">${price}</span>
                           <span>Category : {category.toUpperCase()}</span>
                        </div>
                        {/* shortDesc */}
                        <p className="mt-3">{shortDesc}</p>
                        {/* buy_btn */}
                        <motion.button whileTap={{scale: 1.2}} className="buy_btn" onClick={addToCart}>
                           Add to Cart
                        </motion.button>
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
                  {/* lg='12' Description and Review */}
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
                                 {/* reviews map */}
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
                                    <form action="" onSubmit={submitHandler}>
                                       {/* form_group */}
                                       <div className="form_group">
                                          <input type="text" placeholder="Enter Name" ref={reviewUser} required />
                                       </div>
                                       {/* form_group */}
                                       <div className="form_group d-flex align-items-center gap-5 rating_group">
                                          <motion.span whileTap={{scale:1.2}} onClick={() => setRating(1)}>1 <i className="ri-star-s-fill"></i></motion.span>
                                          <motion.span whileTap={{scale:1.2}} onClick={() => setRating(2)}>2 <i className="ri-star-s-fill"></i></motion.span>
                                          <motion.span whileTap={{scale:1.2}} onClick={() => setRating(3)}>3 <i className="ri-star-s-fill"></i></motion.span>
                                          <motion.span whileTap={{scale:1.2}} onClick={() => setRating(4)}>4 <i className="ri-star-s-fill"></i></motion.span>
                                          <motion.span whileTap={{scale:1.2}} onClick={() => setRating(5)}>5 <i className="ri-star-s-fill"></i></motion.span>
                                       </div>
                                       {/* form_group */}
                                       <div className="form_group">
                                          <textarea rows={4} type="text" placeholder="Review Message" ref={reviewMsg} required />
                                       </div>   
                                       {/* buy_btn */}
                                       <motion.button whileTap={{scale:1.2}}type="submit" className="buy_btn">
                                          Submit
                                       </motion.button>                                   
                                    </form>   
                                 </div>
                              </div>
                           </div>
                        )
                     }
                  </Col>
                  {/* lg='12' Category */}
                  <Col lg='12' className="mt-5">
                     <h2 className="related_title">You Might also like</h2>
                  </Col>
                  {/* ProductsList component */}
                  <ProductList data={relatedProducts} />
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default ProductDetail;
