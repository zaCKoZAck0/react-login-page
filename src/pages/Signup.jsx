import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import SocialBtn from '../components/SocialButtons';

const Signup = () => {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [inputError, setInputError] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [validated, setValidated] = useState(false);

  function validate() {
    if (!input.email) {
      setInputError((prevState) => ({
        ...prevState,
        email: 'Required.',
      }));
    }
    if (!input.username) {
      setInputError((prevState) => ({
        ...prevState,
        username: 'Required.',
      }));
    }
    if (!input.password) {
      setInputError((prevState) => ({
        ...prevState,
        password: 'Required.',
      }));
    }

    if (input.password && input.password.length < 5)
      setInputError((prevState) => ({
        ...prevState,
        password: 'Password too short.',
      }));

    if (input.username && input.username.length < 3)
      setInputError((prevState) => ({
        ...prevState,
        username: 'Username too short.',
      }));

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.email && !emailRegex.test(input.email))
      setInputError((prevState) => ({
        ...prevState,
        email: 'Invalid email format.',
      }));
  }

  function handleChange(e) {
    const name = e.target.name;
    setInputError((prevState) => ({
      ...prevState,
      [name]: '',
    }));
    setInput((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    validate();
    setValidated(true);
  }

  return (
    <Container>
      <h1 className="text-center text-primary">Create Account</h1>
      <Form noValidate validated={validated}>
        <Row className="justify-content-center">
          <Col xl={6}>
            <Card className="text-primary">
              <FloatingLabel
                controlId="username"
                label="Username"
                className="m-3 mb-0"
              >
                <Form.Control
                  value={input.username}
                  name="username"
                  onChange={handleChange}
                  type="text"
                  placeholder="Username"
                  isValid={input.username && !inputError.username}
                  isInvalid={inputError.username}
                />
                <Form.Control.Feedback type="invalid">
                  {inputError.username}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="email"
                label="Email address"
                className="m-3 mb-0"
              >
                <Form.Control
                  value={input.email}
                  name="email"
                  onChange={handleChange}
                  type="text"
                  placeholder="name@example.com"
                  isValid={input.email && !inputError.email}
                  isInvalid={inputError.email}
                />
                <Form.Control.Feedback type="invalid">
                  {inputError.email}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="password"
                label="Password"
                className="m-3 mb-0"
              >
                <Form.Control
                  value={input.password}
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  isValid={input.password && !inputError.password}
                  isInvalid={inputError.password}
                />
                <Form.Control.Feedback type="invalid">
                  {inputError.password}
                </Form.Control.Feedback>
              </FloatingLabel>

              <div className="d-grid gap-2">
                <Row className="mb-3">
                  <Col className="d-grid" style={{ marginLeft: '15px' }}>
                    <Button
                      style={{ textDecoration: 'none' }}
                      variant="link"
                      as="a"
                      href="/login"
                      className="m-3 mb-0"
                    >
                      Sign in instead
                    </Button>
                  </Col>
                  <Col className="d-grid" style={{ marginLeft: '15px' }}>
                    <Button
                      style={{ color: 'white' }}
                      variant="primary"
                      size="lg"
                      className="m-3 mb-0"
                      onClick={handleSubmit}
                    >
                      Signup
                    </Button>
                  </Col>
                </Row>
                <small className="text-center text-secondary">
                  or Sign in with
                </small>
                <Row className="mb-3">
                  <Col style={{ marginLeft: '15px' }}>
                    <SocialBtn.GoogleButton />
                  </Col>
                  <Col style={{ marginRight: '15px' }}>
                    <SocialBtn.GithubButton />
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Signup;
