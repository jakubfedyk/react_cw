import React from 'react';


const Menu = () => {
    const menuElements = [
        <li key='1'>Home</li>,
        <li key='2'> Profile </li>,
        <li key='3'>Dashboard</li>,
    ];
    return (
        <div>
            <ul>
                {menuElements}
            </ul>
        </div>)
};
export default Menu;