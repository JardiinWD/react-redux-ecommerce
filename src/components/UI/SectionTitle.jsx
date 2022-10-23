import React, {Fragment} from 'react'
import { Col } from 'reactstrap' // Import column from Reactstrap

const SectionTitle = (props) => {
    return (
        <Fragment >
            {/* Col lg=12 */}
            <Col lg='12' className="text-center">
                {/* classes.section_title */}
                <h2>{props.title}</h2>
            </Col>
        </Fragment>
    )
}

export default SectionTitle