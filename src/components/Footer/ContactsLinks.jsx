import React, {Fragment} from 'react'
import classes from "./Footer.module.scss" // Stylesheet import
import { Col, ListGroup, ListGroupItem } from "reactstrap"; // Components import from Reactstrap

const ContactsLinks = (props) => {
    // Destructuring of Props
    const {data} = props;
  
    return (
    <Fragment>
        <Col lg='3'>
            {/* footer_quick_links */}
            <div className={classes.footer_quick_links}>
                {/* classes.quick_link_title */}
                <h4 className={classes.quick_link_title}>Contact</h4>
                {/* ListGroup */}
                <ListGroup className={classes.footer_contacts}>
                    {
                        data.map((item, index) => {
                            return(
                                <ListGroupItem key={index}>
                                    <span><i className={item.Icon}></i></span>
                                    <p className="ps-1">{item.text}</p>
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

export default ContactsLinks