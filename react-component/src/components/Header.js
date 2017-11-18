import React from 'react';
import Menu from './Menu';
import logo from '../logo.svg';


const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <Menu/>
            <img src={logo}/>
        </div>)
};
export default Header;