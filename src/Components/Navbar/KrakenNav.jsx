 
import React, { Component } from 'react';
import './KrakenNav.css';

import {Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

import Logo from '../../Assets/uciLogo.png'

class KrakenNav extends Component {
  render() {
    return (  
    <Navbar expand="lg" className="krakenNavbar">
     <Navbar.Brand href="/">
       <img
        src={Logo}
        width="auto"
        height="40"
        className="krakenNavLogo"
       />
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" className="krakenNavToggle"/>
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto krakenNav">
        <Nav.Link href="hw" className="krakenNavLink">Homework</Nav.Link>
        <Nav.Link href="files" className="krakenNavLink">Files</Nav.Link>
      </Nav>
     </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default KrakenNav;