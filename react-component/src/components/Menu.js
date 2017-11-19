import React from 'react';
import {Link} from 'react-router-dom';


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
            {/*<Nav bsStyle="pills" activeKey={0}>*/}
            {/*<NavItem eventKey={1}>Home</NavItem>*/}
            {/*<NavItem eventKey={2}>Profile</NavItem>*/}
            {/*<NavItem eventKey={3}>Dashboard</NavItem>*/}
            {/*</Nav>*/}
        </div>)
};
export default Menu;