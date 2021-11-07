import React from "react";
import logo from './src/logo.svg'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigationbar = () => {
    return ( 
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm">
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px"/> {' '}
          Logo
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Products">
            <NavDropdown.Item href="products/tea">Peliculas</NavDropdown.Item>
            <NavDropdown.Item href="products/hogar">Hogar</NavDropdown.Item>
            <NavDropdown.Item href="products/ropa">Ropa</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="products/promo">Promo</NavDropdown.Item>

          </NavDropdown>
          <Nav.Link href="blog">Blog</Nav.Link>
          <Nav.Link href="about">About Us</Nav.Link>
          <Nav.Link href="contact">Contact Us</Nav.Link>
          
        </Nav>

        </Navbar.Collapse>

       

      </Navbar>
     );
}
 
export default Navigationbar;