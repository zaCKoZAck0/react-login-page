import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import SocialBtn from '../components/SocialButtons';
import calculatePasswordStrength from '../libs/passwordStrength';

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

  function validate(validate = 'all') {
    if ((validate === 'all' || validate === 'email') && !input.email) {
      setInputError((prevState) => ({
        ...prevState,
        email: 'Required.',
      }));
    }
    if ((validate === 'all' || validate === 'username') && !input.username) {
      setInputError((prevState) => ({
        ...prevState,
        username: 'Required.',
      }));
    }
    if ((validate === 'all' || validate === 'password') && !input.password) {
      setInputError((prevState) => ({
        ...prevState,
        password: 'Required.',
      }));
    }

    if (
      (validate === 'all' || validate === 'password') &&
      input.password &&
      input.password.length < 5
    )
      setInputError((prevState) => ({
        ...prevState,
        password: 'Password too short.',
      }));

    if (
      (validate === 'all' || validate === 'username') &&
      input.username &&
      input.username.length < 3
    )
      setInputError((prevState) => ({
        ...prevState,
        username: 'Username too short.',
      }));

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      (validate === 'all' || validate === 'email') &&
      input.email &&
      !emailRegex.test(input.email)
    )
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
    //server side validation
  }

  return (
    <Container>
      <h1 className="text-center text-primary">Create Account</h1>
      <Form noValidate>
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
                  onBlur={() => validate('username')}
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
                  onBlur={() => validate('email')}
                  // isValid={input.email && !inputError.email}
                  isInvalid={!!inputError.email}
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
                  // isValid={input.password && !inputError.password}
                  onBlur={() => validate('password')}
                  isInvalid={inputError.password}
                />
                {input.password && !inputError.password && (
                  <div>
                    <div>Password Strength:</div>
                    <ProgressBar
                      now={calculatePasswordStrength(input.password).score}
                      label={calculatePasswordStrength(input.password).strength}
                      variant={calculatePasswordStrength(input.password).color}
                      animated={true}
                    />
                  </div>
                )}
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
