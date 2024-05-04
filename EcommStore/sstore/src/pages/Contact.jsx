/* eslint-disable no-unused-vars */
import React from "react";
import './Pages.css';
import {Form, FloatingLabel} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <Form action="welcome_get.php" method="GET">
       <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" /><br/>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      
        <br/>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}  />
        <br/>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;