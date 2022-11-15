import React, {useState, useReducer} from "react";
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/login.css'

// Define initialState object for the form field
const initialState = {
   username: '', // username field
   email: '', // email field
   password: '', // Password Field
}

// Create the reducer fn
const reducer = (state, action) => {
   switch(action.type) {
      // use just one case when you 
      case "update_input": 
         return {...state, [action.key]: action.value}
      case "clear_form":
         return {
            username: '', // username field
            email: '', // email field
            password: '', // Password Field
         }
      default: 
         return state
   }
}

const Signup = () => {
   //FIXED: managed all the state with useReducer instead of useState!
   const [state, dispatch] = useReducer(reducer, initialState)

   const submitHandler = (e) => {
      // Prevent refresh on submit
      e.preventDefault()
      // Before clean of fields I have looked at the console
      // console.log(`${state.username},${state.email},${state.password}`);
      
      // Then clear all fields
      dispatch({ type: "clear_form"})
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
                     <Form className="auth_form">
                        {/* form_group | Username */}
                        <FormGroup className="form_group">
                           <input type="text" placeholder="Username" value={state.username} onChange={e => dispatch({type: "update_input", value:e.target.value, key: "username" })} required />
                        </FormGroup>
                        {/* form_group | Email */}
                        <FormGroup className="form_group">
                           <input type="email" placeholder="Email" value={state.email} onChange={e => dispatch({type: "update_input", value:e.target.value, key: "email"  })} required />
                        </FormGroup>
                        {/* form_group | Password */}
                        <FormGroup className="form_group">
                           <input type="password" placeholder="Password" value={state.password} onChange={e => dispatch({type: "update_input", value:e.target.value, key: "password" })} required />
                        </FormGroup>
                        {/* buy_btn */}
                        <button onClick={submitHandler} type="submit" className="buy_btn login_btn">
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
