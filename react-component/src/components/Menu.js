import React from 'react';


const Menu = () => {
    const menuElements = [
        'Home','Profile','Dashboard'].map((element,index)=> {
        return <li key={index}>{element}</li>;
    });
    return (
        <div>
            <ul>
                {menuElements}
            </ul>
        </div>)
};
export default Menu;