/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import './Pages.css';
// import {Form, FloatingLabel} from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';

// function Contact() {
//   return (
//     <Form action="welcome_get.php" method="GET">
//        <Form.Label>Name</Form.Label>
//         <Form.Control type="text" placeholder="Name" /><br/>

//       <Form.Group className="mb-3" controlId="formGroupPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
      
//       <Form.Group className="mb-3" controlId="formGroupEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//       </Form.Group>
      
//         <br/>
//         <Form.Label>Comment</Form.Label>
//         <Form.Control
//           as="textarea"
//           placeholder="Leave a comment here"
//           style={{ height: '100px' }}  />
//         <br/>
//       <Button variant="primary" type="submit" >
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default Contact;



import React, { useState } from "react";
import './Pages.css';
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 
import { peopleContext } from "../peopleContext";
import PeopleProvider from "../peopleContext";
import { peopleArray } from "../peopleInfo";


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    comment: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post('http://localhost:4000', formData); // Change the URL to your server endpoint
      console.log(response.data); // Handle server response if needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
       <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" /><br/>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
      </Form.Group>
      
        <br/>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
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
