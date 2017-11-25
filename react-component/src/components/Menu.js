import React from 'react';
import {Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';


const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/dashboard"> Dashboard</Link>
                </li>
                <li>
                    <Link to='/profile/:postId'> ProfilePost</Link>
                </li>

            </ul>
            <Nav bsStyle="pills"> <LinkContainer exact to="/">
                <NavItem>Home</NavItem>
            </LinkContainer>
                <LinkContainer exact to="/profile">
                    <NavItem>Profile</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/dashboard">
                    <NavItem>Dashboard</NavItem>
                </LinkContainer>
            </Nav>
        </div>
    )
};
export default Menu;