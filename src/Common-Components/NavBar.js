import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShashBlogs</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About us</Nav.Link>
              <NavDropdown title="Recent Blogs" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Old Blogs
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  New Blogs
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Deleted Blogs
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Read our latest Blog
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
