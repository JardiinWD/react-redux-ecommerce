import React, {Fragment} from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet'
import {Container, Row, Col} from 'reactstrap'
import '../styles/Shop.css'

const Shop = () => {
   return (
      /* Shop */
      <Helmet title='Shop'>
         {/* Products */}
         <CommonSection title='Products' />
         {/* Section */}
         <section>
            {/* Container */}
            <Container>
               {/* Row */}
               <Row>
                  {/* lg='3' md='3' */}
                  <Col lg='3' md='3'>
                     {/* filter_widget */}
                     <div className="filter_widget">
                        <select>
                           <option>Filter By Category</option>
                           <option value="sofa">Sofa</option>
                           <option value="mobile">Mobile</option>
                           <option value="chair">Chair</option>
                           <option value="watch">Watch</option>
                           <option value="wireless">Wireless</option>
                        </select>
                     </div>
                  </Col>
                  {/* lg='3' md='3' */}
                  <Col lg='3' md='3'>
                     {/* filter_widget */}
                     <div className="filter_widget">
                        <select>
                           <option>Sort By </option>
                           <option value="ascending">Ascending</option>
                           <option value="descending">Descending</option>
                        </select>
                     </div>
                  </Col>
                  {/* lg='6' md='6' */}
                  <Col lg='6' md='6'>
                     {/* search_box */}
                     <div className="search_box">
                        <input type="text" placeholder="Search" />
                        {/* ri-search-line */}
                        <span><i className="ri-search-line"></i></span>
                     </div>
                  </Col>
               </Row>
            </Container>   
         </section>   
      </Helmet>
   );
};

export default Shop;
