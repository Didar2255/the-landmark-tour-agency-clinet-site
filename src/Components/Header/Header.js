import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/Logo/logo 2.png'
import useFirebase from '../../Hooks/useFirebase';
import "./Header.css"
const Header = () => {
    const { handelSignOut, user } = useFirebase()
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
                        {user.email && <span className='user-name'>{user.displayName}</span>}
                        {
                            !user.email ? <NavLink to='/login'><button className='login-btn'>Log-In</button></NavLink>
                                : <button className='logout-btn' onClick={handelSignOut}>Log-Out</button>
                        }
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;