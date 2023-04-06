import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

import "../styles/login.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login validation and redirect to dashboard page
  };

  return (
    <Container className="mt-5">
      <h1>Signup</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            id="input"
            type="text"
            placeholder="Enter username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            id="input"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            id="input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Link to="/input">
          <Button variant="primary" id="submit-btn">
            Sign Up
          </Button>
        </Link>
      </Form>
    </Container>
  );
};

export default SignupPage;
