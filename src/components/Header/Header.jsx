import React from "react"; // React import
import { NavLink } from "react-router-dom"; // Navlink' import
import classes from "./Header.module.css"; // Header' stylesheet
import { Container, Row } from "reactstrap"; // Import components from Reactstrap
import logo from "../../assets/images/eco-logo.png"; // Import Logo
import userIcon from "../../assets/images/user-icon.png"; // Import Logo

const Header = () => {
   return (
      /* header */
      <div className={classes.header}>
         {/* Container */}
         <Container>
            {/* Row */}
            <Row>
               {/* classes.nav_wrapper */}
               <div className={classes.nav_wrapper}>
                  {/* classes.logo */}
                  <div className={classes.logo}>
                     <img src={logo} alt="Logo" />
                     <div>
                        <h1>E-commerce</h1>
                        <p>Since 1995</p>
                     </div>
                  </div>
                  {/* classes.navigation */}
                  <div className={classes.navigation}>
                     {/* classes.menu */}
                     <ul className={classes.menu}>
                        {/* classes.nav_item | home */}
                        <li className={classes.nav_item}>
                           <NavLink to="home"> Home </NavLink>
                        </li>
                        {/* classes.nav_item | shop */}
                        <li className={classes.nav_item}>
                           <NavLink to="shop"> Shop </NavLink>
                        </li>
                        {/* classes.nav_item | cart */}
                        <li className={classes.nav_item}>
                           <NavLink to="cart"> Cart </NavLink>
                        </li>
                     </ul>
                  </div>
                  {/* classes.nav_icons */}
                  <div className={classes.nav_icons}>
                     {/* ri-heart-line */}
                     <span className={classes.fav_icon}>
                        <i className="ri-heart-line"></i>
                     </span>
                     {/* ri-shopping-bag-line */}
                     <span className={classes.cart_icon}>
                        <i className="ri-shopping-bag-line"></i>
                     </span>
                     {/*  */}
                     <span>
                        <img src={userIcon} alt="User Icon" />
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
