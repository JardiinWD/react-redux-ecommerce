import React, {Fragment} from "react"; // React Import
import Helmet from "../components/Helmet/Helmet"; // Helmet component' import
import { Container, Row, Col } from "reactstrap"; // Reactstrap import
import classes from '../styles/Home.module.scss' // Stylesheet classes'
import heroImg from '../assets/images/hero-img.png' // Hero Image
import { Link } from "react-router-dom"; // Link Routing
import {motion} from 'framer-motion'
import Services from "../services/Services";



const Home = () => {
   // Const year
   const year = new Date().getFullYear()
   
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
         </Helmet>
      </Fragment>
   );
};

export default Home;
