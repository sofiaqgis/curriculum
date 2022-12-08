import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React from 'react';


function Navigation() {
    return(
        <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{fontFamily: 'notoRegular'}} href="#sobremi">Sobre mí</Nav.Link>
              <Nav.Link style={{fontFamily: 'notoRegular'}} href="#cursos">Cursos</Nav.Link>
              <Nav.Link style={{fontFamily: 'notoRegular'}} href="#trabajos">Algunos trabajos</Nav.Link>
              <Nav.Link as={Link} to='/curriculum' style={{fontFamily: 'notoRegular'}}>Curriculum</Nav.Link>
               <Nav.Link style={{fontFamily: 'notoRegular'}} href="#contacto">Contacto</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
        
    );

}

export default Navigation;