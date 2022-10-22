import React, {Fragment, useState, useEffect} from "react"; // React Import
import Helmet from "../components/Helmet/Helmet"; // Helmet component' import
import { Container, Row, Col } from "reactstrap"; // Reactstrap import
import { Link } from "react-router-dom"; // Link Routing
import {motion} from 'framer-motion' // Import framer Motion
import classes from '../styles/Home.module.scss' // Stylesheet classes'
import heroImg from '../assets/images/hero-img.png' // Hero Image
//////
// Components // 
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import Clock from "../components/UI/Clock";
//////
// Data import //
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'

const Home = () => {
   // Const year
   const year = new Date().getFullYear()
   ///////
   // useState //
   const [trendingData, setTrendingData] = useState([])
   const [bestSalesData, setBestSalesData] = useState([])
   // console.log(trendingData, bestSalesData);

   ///////
   // useEffect //
   const DataCallbackFn = () => {
      // Verify the products filtered by chair keyword
      const filteredTrendingData = products.filter(item => item.category === 'chair')
      // Verify the products filtered by the best sales
      const filteredbestSales = products.filter(item => item.category === 'sofa')
      // Setting state of Data on filteredTrendingData
      setTrendingData(filteredTrendingData)
      // Setting state of data on filteredbestSales
      setBestSalesData(filteredbestSales)
   }
   /* useEffect for data */
   useEffect(DataCallbackFn, [])

   ///////
   // Component Return //
   return (
      /* Intestazione */
      <Fragment>
         {/* Helmet Component */}
         <Helmet title={'Home'}>
            {/* hero_section */}
            <section className={classes.hero_section}>
               {/* Container */}
               <Container>
                  {/* Row */}
                  <Row>
                     {/* Col lg='6' md='6' */}
                     <Col lg='6' md='6'>
                        {/* hero_content */}   
                        <div className={classes.hero_content}>
                           {/* hero_subtitle */}
                           <p className={classes.hero_subtitle}>Trending product in {year}</p>
                           {/* Section Title */}
                           <h2>Make Your Interior More Minimalistic & Modern</h2>
                           {/* Section Paragraph */}
                           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium temporibus nihil maxime officia! Voluptatum adipisci iusto rerum in culpa.</p>
                           {/* Section Btn */}
                           <motion.button whileTap={{scale: 1.2}} className={classes.buy_btn}>
                              {/* Link Component */}
                              <Link to='/shop'>SHOP NOW</Link>
                           </motion.button>
                        </div>
                     </Col>
                     {/* Col lg='6' md='6' */}
                     <Col lg='6' md='6'>
                        {/*  */}
                        <div className="hero_img">
                           <img src={heroImg} alt="Hero Image" />
                        </div>
                     </Col>
                  </Row>
               </Container>
            </section>
            {/* Services */}
            <Services />
            {/* classes.trending_products */}
            <section className={classes.trending_products}>
               {/* Container */}
               <Container>
                  {/* Row */}
                  <Row>
                     {/* Col lg=12 */}
                     <Col lg='12' className="text-center">
                        {/* classes.section_title */}
                        <h2 className={classes.section_title}>Trending Products</h2>
                     </Col>
                     {/* ProductList */}
                     {/* Passing data through Props */}
                     {/* At the moment the current state of data is filtered with the keyword Chair */}
                     <ProductList data={trendingData} />
                  </Row>
               </Container>
            </section>
            {/* classes.best_sales */}
            <section className={classes.best_sales}>
               <Container>
                  {/* Row */}
                  <Row>
                     {/* Col lg=12 */}
                     <Col lg='12' className="text-center">
                        {/* classes.section_title */}
                        <h2 className={classes.section_title}>Best Sales</h2>
                     </Col>
                     {/* ProductList */}
                     {/* Passing data through Props */}
                     {/* At the moment the current state of data is filtered with the keyword Chair */}
                     <ProductList data={bestSalesData} />
                  </Row>
               </Container>
            </section>
            {/* classes.timer_count */}
            <section className={classes.timer_count}>
               {/* Container */}
               <Container >
                  {/* Row */}
                  <Row >
                     {/* Col lg='6' md='6' */}
                     <Col lg='6' md='6'>
                        {/* clock_top_content */}
                        <div className={classes.clock_top_content}>
                           <h4>Limited Offer</h4>
                           <h3>Quality Armchair </h3>
                        </div>
                        {/* Clock Components */}
                        <Clock />
                        {/* classes.store_btn */}
                        <motion.button whileTap={{scale : 1.2}} className={classes.store_btn}>
                           <Link to='/shop'>Visit Store</Link>
                        </motion.button>
                     </Col>
                     {/* Col lg='6' md='6' */}
                     <Col lg='6' md='6' className="text-end">
                        <img src={counterImg} alt="" />
                     </Col>
                  </Row>
               </Container>
            </section>
         </Helmet>
      </Fragment>
   );
};

export default Home;
