import React from "react"; // React import
import { NavLink } from "react-router-dom"; // Navlink' import
import classes from "./Header.module.scss"; // Header' stylesheet
import { Container, Row } from "reactstrap"; // Import components from Reactstrap
import Logo from "../UI/Logo"; // Import logo component
import userIcon from "../../assets/images/user-icon.png"; // Import Icon user img
import {motion} from "framer-motion"


const Header = () => {
   // Navlinks Array with dynamic path / key
   const nav_links = [
      {
         path: "home",
         display: "Home",
         id: "home",
      },
      {
         path: "shop",
         display: "Shop",
         id: "shop",
      },
      {
         path: "cart",
         display: "Cart",
         id: "cart",
      },
   ];

   return (
      /* header */
      <div className={classes.header}>
         {/* Container */}
         <Container>
            {/* Row */}
            <Row>
               {/* classes.nav_wrapper */}
               <div className={classes.nav_wrapper}>
                  {/* Logo Component */}
                  <Logo />
                  {/* classes.navigation */}
                  <div className={classes.navigation}>
                     {/* classes.menu */}
                     <ul className={classes.menu}>
                        {/* Map operation for array of links_item */}
                        {nav_links.map((item) => { 
                           return (
                              /* classes.nav_item | home */
                              <li key={item.id} className={classes.nav_item}>
                                 {/* Active links classes */}
                                 <NavLink className={(navClass) => navClass.isActive ? "nav_active" : ""} to={item.path}>
                                    {item.display}
                                 </NavLink>
                              </li>
                           );
                        })}
                     </ul>
                  </div>
                  {/* classes.nav_icons */}
                  <div className={classes.nav_icons}>
                     {/* ri-heart-line */}
                     <span className={classes.fav_icon}>
                        <i className="ri-heart-line"></i>
                        <span className={classes.badge}>1</span>
                     </span>
                     {/* ri-shopping-bag-line */}
                     <span className={classes.cart_icon}>
                        <i className="ri-shopping-bag-line"></i>
                        <span className={classes.badge}>1</span>
                     </span>
                     {/* Altered img by Motion library */}
                     <span>
                        <motion.img whileTap={{scale:1.2}} src={userIcon} alt="User Icon" />
                     </span>
                  </div>
                  {/* classes.mobile_menu */}
                  <div className={classes.mobile_menu}>
                     <span>
                        {/* ri-menu-line */}
                        <i className="ri-menu-line"></i>
                     </span>
                  </div>
               </div>
            </Row>
         </Container>
      </div>
   );
};

export default Header;
