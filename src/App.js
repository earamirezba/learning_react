import React from 'react';
import logo from './logo.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/hero';
import Acordeon from './components/acordeon';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <Sidebar/>
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
      
      <div className="container">
        <div className="row">
          <div className="col">
            <Hero />
          </div>
        </div>
        <div className="row">
          <Acordeon />

        </div>

      </div>
    </>
  );
}

export default App;
