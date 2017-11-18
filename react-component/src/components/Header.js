import React from 'react';
import Menu from './Menu';
import logo from '../logo.svg';
import './logo.css';


const Header = () => {
    return (
        <div>
            <h1 className='header'>Header</h1>
            <Menu/>
            <img className='logo' src={logo}/>
        </div>)
};
export default Header;