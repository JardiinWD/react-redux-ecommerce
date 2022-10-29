import React, {Fragment} from 'react'
import { Container } from 'reactstrap'
import '../../styles/Common.css'


const CommonSection = ({title}) => {
  return (
    <Fragment>
        <section className="common_section">
            <Container className="text-center">
                <h1>{title}</h1>
            </Container>
        </section>
    </Fragment>
  )
}

export default CommonSection