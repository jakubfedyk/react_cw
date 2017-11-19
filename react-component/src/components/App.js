import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Profile from './Profile';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
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
                </ul>
                <Route exact path='/' component={Home}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Footer/>
            </div>
        </Router>
    )
        ;
};
export default App;
