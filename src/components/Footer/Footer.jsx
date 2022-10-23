import React, {Fragment, useEffect, useState} from "react";
import classes from "./Footer.module.scss" // Stylesheet import
import { Container, Row} from "reactstrap"; // Components import from Reactstrap
import CategoriesLinks from "./CategoriesLinks";
import UsefulFooterLinks from "./UsefulFooterLinks";
import ContactsLinks from "./ContactsLinks";
//////
import contactLinks from '../../assets/data/contactLinks' //  Arrays of data
import categoryLinks from '../../assets/data/categoryLinks' //  Arrays of data
import UsefulLinks from '../../assets/data/UsefulLinks' //  Arrays of data



const Footer = () => {

   ////////////
   // useState for Links //
   const [category, setCategory] = useState([])
   const [usefulLinks, setusefulLinks] = useState([])
   const [contacts, setContacts] = useState([])

   ////////////
   // useEffect for Links //
   const footerLinksCallbackFn = () => {
      // My Bouncing Function with a timeout
      const bouncingFn = setTimeout(() => {
         const filteredCategoryLinks = categoryLinks
         const filteredUsefulLinks = UsefulLinks
         const filteredContactsLinks = contactLinks
         // Updated my Category Links state
         setCategory(filteredCategoryLinks)
         // Updated my useFul Links state
         setusefulLinks(filteredUsefulLinks)
         // Updated my Category Links state
         setContacts(filteredContactsLinks)
      }, 500)
      // Cleanup Function
      return () => {clearTimeout(bouncingFn)}
   }
   useEffect(footerLinksCallbackFn, 
      [setCategory, setusefulLinks, setContacts, usefulLinks]
   )

   return (
      <Fragment>
         {/* classes.footer */}
         <footer className={classes.footer}>
            {/* Container */}
            <Container>
               {/* Row */}
               <Row className="justify-content-between">
                  {/* Passing Data through props */}
                  <CategoriesLinks data={category} />
                  <UsefulFooterLinks data={usefulLinks} />
                  <ContactsLinks data={contacts} />                                   
               </Row>
            </Container>
         </footer>
      </Fragment>
   )
};

export default Footer;
