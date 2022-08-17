import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <header>
      {' '}
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container className='nav justify-content-center'>
          <Navbar.Brand>Add Your Todos</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
