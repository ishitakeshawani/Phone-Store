import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from "react-router-dom";
import BlankNavbar from "./BlankNavbar";

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [Loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords Do not match!');
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/productList");

        } catch {

            setError('failed to create an account');
        }

        setLoading(false);
    }

    return (
        <>
            <BlankNavbar />
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "80vh" }}
            >
                <div className="w-100" style={{ maxWidth: "500px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mt-4">Sign Up</h2>

                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>
                                        Email
                            </Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>
                                        Password
                            </Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>
                                        Password Confirmfation
                            </Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required />
                                </Form.Group>
                                <Button disabled={Loading} className="w-100 mt-3" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login" className="bottomlink">Log In</Link>
                    </div>
                </div>
            </Container>

        </>
    );
}

export default SignUp;
