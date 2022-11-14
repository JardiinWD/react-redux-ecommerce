import React, {useState} from "react";
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/login.css'

const Signup = () => {

   //FIXME: Think about all these state, use the useReducer instead!

   // useState for the username field
    const [username, setUsername] = useState('')  
   // useState for the email field
   const [email, setEmail] = useState('')
   // useState for the password field
   const [password, setPassword] = useState('')
   // useState for the password field
   const [file, setFile] = useState(null)

   const submitHandler = (e) => {
      // Prevent refresh on submit
      e.preventDefault()
      // Clear all fields
      setUsername('')
      setEmail('')
      setPassword('')
      if (file !== null) setFile(null)
   }


   return (
      /* Signup */
      <Helmet title='Signup'>
         <section>
            {/* Container */}
            <Container>
               {/* Row */}
               <Row>
                  {/* lg='6' */}
                  <Col lg='6' className="m-auto text-center">
                     {/* Signup Title */}
                     <h3 className="fw-bold mb-4">Signup</h3>
                     {/* auth_form */}
                     <Form className="auth_form" onSubmit={submitHandler}>
                        {/* form_group | Username */}
                        <FormGroup className="form_group">
                           <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                        </FormGroup>
                        {/* form_group | Email */}
                        <FormGroup className="form_group">
                           <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                        </FormGroup>
                        {/* form_group | Password */}
                        <FormGroup className="form_group">
                           <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                        </FormGroup>
                        {/* form_group | Password */}
                        <FormGroup className="form_group">
                           <input type="file" onChange={e => setFile(e.target.files[0])} required />
                        </FormGroup>


                        {/* buy_btn */}
                        <button type="submit" className="buy_btn login_btn">
                           Create an account
                        </button>
                        {/* Already have an Account */}
                        <p>
                           Already have an account? 
                           <Link to='/login'>Login</Link>
                        </p>
                     </Form>
                  </Col>
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

export default Signup;
