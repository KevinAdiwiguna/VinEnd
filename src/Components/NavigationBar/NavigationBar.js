import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import {Link} from 'react-scroll'
import './navbar.css'


function NavigationBar() {

    return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="transparant" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand>XI RPL 1</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <Nav.Link><Link  to="hero" spy={false} smooth={true} offset={-50} duration={500} >Home</Link></Nav.Link>
            <Nav.Link><Link  to="aboutme" spy={false} smooth={true} offset={-140} duration={500}>About Me</Link></Nav.Link>
            <Nav.Link><Link  to="skills" spy={false } smooth={true} offset={-90} duration={500}>Skill</Link></Nav.Link>
            <NavDropdown title="Social Media" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">Instagram</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Github</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Youtube</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
