import React from 'react';
import { NavItem, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className='col-lg-3 mt-2'>
            <Nav vertical pills className='nav nav-pills'>
                <NavItem className=''>
                    <NavLink exact to="/" className='Navigation-link nav-link'>About Me</NavLink>
                </NavItem>
                <NavItem className=''>
                    <NavLink exact to="/resume" className='Navigation-link nav-link'>My Resume</NavLink>
                </NavItem>
                <NavItem className=''>
                    <NavLink exact to="/projects" className='Navigation-link nav-link'>My Projects</NavLink>
                </NavItem>
                <NavItem className=''>
                    <NavLink exact to="/contact" className='Navigation-link nav-link'>Contact</NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Navigation;