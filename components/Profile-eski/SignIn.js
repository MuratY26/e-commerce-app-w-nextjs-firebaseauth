import React, { useState } from "react";
import {Button, Form, Alert, Container, Row, Col} from "react-bootstrap";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUserContext } from "../../hooks/UserProvider";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.div`
  border: 0.063rem solid #ccc;
  padding: 1.25rem;
  border-radius: 0.625rem;
  background-color: #fff;
  box-shadow: 0 0 0.650rem rgba(179, 0, 0, 0.5);
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useUserContext();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(null)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(null)
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      signIn(user.email);
      console.log("Success:", user);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);

      // Handle different error codes
      if (error.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else if (error.code === "auth/invalid-login-credentials") {
        setError("Invalid password.");
      } else {
        setError("An error occurred while signing in.");
      }
    }
  };

  const handleEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      // e.preventDefault();
      handleSignIn();
    }
  };

  return (
      <StyledContainer>
        <FormWrapper>
      <Form>
        <Row>
          <Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            onKeyDown={handleEnterKeyDown}
          />
          <Form.Text className="text-muted">Welcome back!</Form.Text>
        </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleEnterKeyDown}
          />
        </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
        <Button variant="primary" onClick={() => handleSignIn(email, password)}>
          Sign In
        </Button>
          </Col>
        </Row>
      </Form>

      {error && (
          <Alert variant="danger" className="mt-2">
            {error}
          </Alert>
      )}
        </FormWrapper>
      </StyledContainer>
  );
}

export default SignIn;
