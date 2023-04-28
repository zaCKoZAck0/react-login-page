import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import SocialBtn from '../components/SocialButtons';

const Signup = () => {
  return (
    <Container>
      <h1 className="text-center text-primary">Create Account</h1>
      <Row className="justify-content-center">
        <Col xl={6}>
          <Card className="text-primary">
            <FloatingLabel
              controlId="username"
              label="Username"
              className="m-3 mb-0"
            >
              <Form.Control type="text" placeholder="Username" />
            </FloatingLabel>
            <FloatingLabel
              controlId="email"
              label="Email address"
              className="m-3 mb-0"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="password"
              label="Password"
              className="m-3 mb-0"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="password2"
              label="Re-enter Password"
              className="m-3 mb-0"
            >
              <Form.Control type="password" placeholder="Password" />
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
    </Container>
  );
};

export default Signup;
