import React, {Fragment} from 'react'
import logo from "../../assets/images/eco-logo.png"; // Import Logo
import classes from "./Logo.module.scss" // Stylesheet import


const Logo = () => {
  return (
    <Fragment >
        {/* classes.logo */}
        <div className={classes.logo}>
            <img src={logo} alt="Logo" />
            <h1>E-commerce</h1>
        </div>
    </Fragment>
  )
}

export default Logo