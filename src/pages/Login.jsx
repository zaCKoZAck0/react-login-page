import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import SocialBtn from '../components/SocialButtons';

const Login = () => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  const [inputError, setInputError] = useState({
    username: '',
    password: '',
  });

  //trigger to send data for server side validation
  const [validated, setValidated] = useState(false);

  function validate(validate = 'all') {
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

    setValidated(
      !(inputError.email || inputError.password || inputError.username)
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    validate();
    // server side validation
  }

  return (
    <Container>
      <h1 className="text-center text-primary">Login</h1>
      <Form noValidate>
        <Row className="justify-content-center">
          <Col xl={6}>
            <Card className="text-primary">
              <FloatingLabel
                controlId="username"
                label="Username or Email"
                className="m-3 mb-0"
              >
                <Form.Control
                  value={input.username}
                  name="username"
                  onChange={handleChange}
                  type="text"
                  placeholder="Username or Email"
                  onBlur={() => validate('username')}
                  isInvalid={inputError.username}
                />
                <Form.Control.Feedback type="invalid">
                  {inputError.username}
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
                      href="/signup"
                      className="m-3 mb-0"
                    >
                      Create account
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
                      Login
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

export default Login;
