import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/Logo/logo 2.png'
import "./Header.css"
const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light" className="menu-bar">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="80px"
                            height="50px"
                            className="d-inline-block align-top"
                        />{' '}
                        <span className="tour-title">The Landmark Tour</span>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/manageorder'>Manage All Order</NavLink>
                        <NavLink to='/newservice'>Add New Tour</NavLink>
                        <NavLink to='/about'>About Us</NavLink>
                        <NavLink to='/login'>Log-In</NavLink>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;