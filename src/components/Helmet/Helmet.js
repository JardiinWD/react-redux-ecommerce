import React from 'react'
// Import Helmet' stylesheet
import classes from './Helmet.module.css'



const Helmet = (props) => {
    // Pages Name
    document.title = 'Ecommerce - ' + props.title
    return (
        <div className={classes.helmet}>{props.children}</div>
    )
}

export default Helmet