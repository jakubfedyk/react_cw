import React from 'react';
import Menu from './Menu';
import logo from '../logo.svg';
// import './logo.css';

const logoStyle = {
    width: '100px',
    height: '20px'
};
const header = {
    fontSize: '75px',
    fontFamily: 'Helvetica'
};

const Header = () => {
    return (
        <div>
            <h1 style={header}>Header</h1>
            <Menu/>
            <img style={logoStyle} src={logo}/>
        </div>)
};
export default Header;