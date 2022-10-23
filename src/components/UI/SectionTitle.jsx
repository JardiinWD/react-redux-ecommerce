import React, {Fragment} from 'react'
import { Col } from 'reactstrap' // Import column from Reactstrap
import classnames from 'classnames'; // Needed to passing classes via props

const SectionTitle = (props) => {
    // Destructuring of Props
    const {title, className} = props
    return (
        <Fragment >
            {/* Col lg=12 */}
            <Col lg='12' className={classnames(props.className)}>
                {/* classes.section_title */}
                <h2>{title}</h2>
            </Col>
        </Fragment>
    )
}

export default SectionTitle