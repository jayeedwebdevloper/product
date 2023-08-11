/* eslint-disable no-unused-vars */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Header = () => {
    return (
        <header className='bg-white'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand><Link to='/' className='logo'><img src={logo} alt="fisino" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link><Link to='/' className='color-text fw-semibold px-1'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/cart' className='color-text fw-semibold px-1'>Cart</Link></Nav.Link>
                            <Nav.Link><Link to='/products' className='color-text fw-semibold px-1'>Products</Link></Nav.Link>
                            <Nav.Link><Link to='/about' className='color-text fw-semibold px-1'>About Us</Link></Nav.Link>


                            <Nav.Link><Link to='/account' className='ps-4 color-text fw-semibold'>My Account</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;