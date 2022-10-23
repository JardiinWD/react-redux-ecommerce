import React, {Fragment} from 'react'
import classes from "./Footer.module.scss" // Stylesheet import
import { Col, ListGroup, ListGroupItem } from "reactstrap"; // Components import from Reactstrap
import { Link } from "react-router-dom"; // Link component from React-router-dom

const CategoriesLinks = (props) => {
    // Destructuring of Props
    const {data} = props;

    return (
        <Fragment>
            <Col lg='3'>
                {/* footer_quick_links */}
                <div className={classes.footer_quick_links}>
                    {/* classes.quick_link_title */}
                    <h4 className={classes.quick_link_title}>Top Categories</h4>
                    {/* ListGroup */}
                    <ListGroup className="mb-3">  
                    {
                        data.map((item, index) => {
                            return (
                                <ListGroupItem key={index} className={item.Listclass}>
                                    <Link to='#'>{item.text}</Link>
                                </ListGroupItem>
                            )
                        })
                    }
                    </ListGroup>
                </div>
            </Col>        
        </Fragment>
    )
}

export default CategoriesLinks