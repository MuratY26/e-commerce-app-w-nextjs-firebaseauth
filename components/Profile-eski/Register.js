import React, {useState} from 'react';
import { Button, Form, Alert, Container, Row, Col } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Firebase";
import styled from 'styled-components';

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

function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function Register({ handleShow, handleClose, show }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Success:", user);
        } catch (error) {
            console.error("Error:", error);
            if (error.code === 'auth/email-already-in-use') {
                setError('This email is already in use. Please choose a different email.');
            }
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleCheckboxChange = () => {
        setIsAgreed(!isAgreed);
    };

    const handleRegisterClick = () => {
        if (!isAgreed) {
            setError('T&C Agreement must be accepted!');
            return;
        }

        if (!isEmailValid(email)) { // E-posta adresini kontrol et
            setError('Please enter a valid email address.');
            return;
        }

        setError('');
        handleRegister(email, password);
    };

    return (
        <>
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
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
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
                            />
                        </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="T&C Agreement"
                                checked={isAgreed}
                                onChange={handleCheckboxChange}
                            />
                        </Form.Group>
                            </Col>
                        </Row>


                    <Row>
                        <Col>
            <Button
                variant="primary"
                onClick={handleRegisterClick}
            >
                Register
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
        </>
    );
}

export default Register;
