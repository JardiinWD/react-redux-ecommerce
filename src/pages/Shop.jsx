import React, {useState, useRef} from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet'
import {Container, Row, Col} from 'reactstrap'
import '../styles/Shop.css'
import products from '../assets/data/products'
import ProductList from '../components/UI/ProductList'


const Shop = () => {

   // useState method for productsData asset
   const [productsData, setProductsData] = useState(products)

   // Refactoring, created a better Handler!
   // Handler fn for filtered Data
   const optionHandler = (e) => {
      e.preventDefault() // Preventing refresh
      // Setting the filtered products based on the filter applied on products
      const filteredProducts = products.filter(item => item.category === e.target.value)
      // update the current state of products data
      // based on a statement
      if (filteredProducts) setProductsData(filteredProducts)
      // If there is not a correct option I manage the current state with array of products
      if(!filteredProducts) setProductsData(products)
   }

   // Handler fn for filtered data with search field
   const searchInputHandler = (e) => {
      // Find out what the user write in the field
      const searchTerm = e.target.value
      // Sorting products  based on what user Search
      const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
      // Update the current state
      setProductsData(searchedProducts)
   }


   // Handler fn for filtered Data (Bad Way in my opinion)
   /* const handleFilter = (e) => {
      e.preventDefault() // Prevent Default
      const filterValue = e.target.value // Find out the filtered Value
      // Statement for the filter Value options
      if (filterValue === 'sofa') {
         // Setting the filtered products based on the filter applied on products
         const filteredProducts = products.filter(item => item.category === 'sofa')
         // update the current state of products data
         setProductsData(filteredProducts)
      }
      // Statement for the filter Value options
      if (filterValue === 'mobile') {
         // Setting the filtered products based on the filter applied on products
         const filteredProducts = products.filter(item => item.category === 'mobile')
         // update the current state of products data
         setProductsData(filteredProducts)
      }
      // Statement for the filter Value options
      if (filterValue === 'chair') {
         // Setting the filtered products based on the filter applied on products
         const filteredProducts = products.filter(item => item.category === 'chair')
         // update the current state of products data
         setProductsData(filteredProducts)
      }
      // Statement for the filter Value options
      if (filterValue === 'watch') {
         // Setting the filtered products based on the filter applied on products
         const filteredProducts = products.filter(item => item.category === 'watch')
         // update the current state of products data
         setProductsData(filteredProducts)
      }
      // Statement for the filter Value options
      if (filterValue === 'wireless') {
         // Setting the filtered products based on the filter applied on products
         const filteredProducts = products.filter(item => item.category === 'wireless')
         // update the current state of products data
         setProductsData(filteredProducts)
      }
   } */


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
                        <select onChange={optionHandler}>
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
                        <input type="text" placeholder="Search" onChange={searchInputHandler} />
                        {/* ri-search-line */}
                        <span><i className="ri-search-line"></i></span>
                     </div>
                  </Col>
               </Row>
            </Container> 
         </section>  
         {/* Product List */} 
         <section className="pt-0">
            {/* Container */}
            <Container>
               <Row>
                  {/* Products */}
                  {
                     productsData.length === 0 ? 
                     (
                        /* If was true */
                        <h1 className="text-center fs-4">No products was found!</h1>
                     ) : (
                        /* If was False */
                        <ProductList data={productsData} />
                     )
                  }
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default Shop;
