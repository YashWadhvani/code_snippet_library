// // import React from 'react';
// // import "../index.css";

// // function Login({ onClose }) {
// //   return (
// //     <div className="login-popup">
// //       <div className="login-content">
// //         <span className="close" onClick={onClose}>&times;</span>
// //         <h2>Login</h2>
// //         {/* Add your social media links here */}
// //         {/* <div className="social-links">
// //           <a href="#">Facebook</a>
// //           <a href="#">Twitter</a>
// //           <a href="#">LinkedIn</a>
// //         </div> */}
// //         {/* Add your login form fields here */}
// //         <form>
// //           <label>Email:</label>
// //           <input type="email" />
// //           <label>Password:</label>
// //           <input type="password" />
// //           <button type="submit">Login</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;


import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import {  FaFacebookF ,FaTwitter,FaGoogle } from "react-icons/fa" 

function Login() {
  return (
    <section className="vh-100">
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xs={12} md={8} lg={6} xl={5}>
            <Card bg="dark" text="white" style={{ borderRadius: '1rem' }}>
              <Card.Body className="p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>
                  <Form>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                    <Button variant="outline-light" className="btn-lg px-5" type="submit">Login</Button>
                  </Form>
                  <div className="d-flex justify-content-space-around text-center px-5 mt-4 pt-1">
                    <a href="#!" className="text-white me-4"><FaFacebookF fontSize={"30px"}/></a>
                    <a href="#!" className="text-white me-4"><FaGoogle fontSize={"30px"}/></a>
                    <a href="#!" className="text-white "><FaTwitter fontSize={"30px"}/></a>
                  </div>
                </div>
                <div>
                  <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
