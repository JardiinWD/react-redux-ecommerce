import React, {useState} from "react";
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/login.css'

const Login = () => {

   // useState for the email field
   const [email, setEmail] = useState('')
   // useState for the password field
   const [password, setPassword] = useState('')

   return (
      /* Login */
      <Helmet title='Login'>
         <section>
            {/* Container */}
            <Container>
               {/* Row */}
               <Row>
                  {/* lg='6' */}
                  <Col lg='6' className="m-auto text-center">
                     {/* Login Title */}
                     <h3 className="fw-bold mb-4">Login</h3>
                     {/* auth_form */}
                     <Form className="auth_form">
                        {/* form_group | Email */}
                        <FormGroup className="form_group">
                           <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        </FormGroup>
                        {/* form_group | Email */}
                        <FormGroup className="form_group">
                           <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        </FormGroup>
                        {/* buy_btn */}
                        <button type="submit" className="buy_btn login_btn">
                           Login
                        </button>
                        {/* Don't have an Account */}
                        <p>
                           Don't have an account? 
                           <Link to='/signup'>Create an account</Link>
                        </p>
                     </Form>
                  </Col>
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default Login;
