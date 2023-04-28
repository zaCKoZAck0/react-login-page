import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';

const Layout = () => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="md">
        <Navbar.Brand>
          <FaReact style={{ margin: '5px' }} />
          <Link style={{ textDecoration: 'none' }} to="/">
            React Login
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
