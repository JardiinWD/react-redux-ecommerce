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
//////
// Data import //
import products from '../assets/data/products'

const Home = () => {
   // Const year
   const year = new Date().getFullYear()
   ///////
   // useState //
   const [data, setData] = useState(products)
   console.log(data);

   ///////
   // useEffect //
   const dataCallbackFn = () => {
      // Verify the products filtered by chair keyword
      const filteredProducts = products.filter(item => item.category === 'chair')
      // Setting state of Data on filteredProducts
      setData(filteredProducts)
   }
   useEffect(dataCallbackFn, [])

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
                     <ProductList data={data} />
                  </Row>
               </Container>
            </section>
         </Helmet>
      </Fragment>
   );
};

export default Home;
