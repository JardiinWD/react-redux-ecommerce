import React, {Fragment} from 'react' // React' import
import classes from '../styles/Services.module.scss' // Classes' import from Stylesheet
import {Container, Row, Col} from 'reactstrap' // Bootstrap components from reactstrap
import {motion} from 'framer-motion' // Motion import
import serviceData from '../assets/data/serviceData' // Service' data

const Services = () => {
  return (
    <Fragment >
        {/* classes.services */}
        <section className={classes.services}>
            {/* Container */}
            <Container >
                {/* Row */}
                <Row >
                    {/* Service Data map method */}
                    {
                        serviceData.map((service, index) => {
                            return (
                                /* lg='3' md='4' */
                                <Col key={index} lg='3' md='4'>
                                    {/* classes.service_item */}
                                    <motion.div whileHover={{scale: 1.1}} style={{background: `${service.bg}`}} className={classes.service_item}>
                                        {/* ri-truck-line */}
                                        <span> 
                                            <i className={service.icon}></i>
                                        </span>
                                        {/* Shipping Info */}
                                        <div>
                                            <h3>{service.title}</h3>
                                            <p>{service.subtitle}</p>
                                        </div>
                                    </motion.div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    </Fragment>
  )
}

export default Services