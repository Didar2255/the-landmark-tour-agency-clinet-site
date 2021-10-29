import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/Logo/logo 2.png'
import "./Header.css"
import useAuth from '../../Hooks/useAuth';
const Header = () => {
    const LinkColor = {
        fontWeight: "bold",
        color: "red"
    }
    const { handelSignOut, user } = useAuth()
    return (
        <div>
            <Navbar bg="light" variant="light" className="menu-bar" collapseOnSelect expand="lg">
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
                        <NavLink to='/home'
                            activeStyle={LinkColor}
                        >Home</NavLink>
                        <NavLink to='/order'
                            activeStyle={LinkColor}
                        >My Order</NavLink>
                        <NavLink to='/manageorder'
                            activeStyle={LinkColor}
                        >Manage All Order</NavLink>
                        <NavLink to='/newservice'
                            activeStyle={LinkColor}
                        >Add New Tour</NavLink>
                        <NavLink to='/about'
                            activeStyle={LinkColor}
                        >About Us</NavLink>
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