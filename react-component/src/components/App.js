import React from 'react';
import Header from './Header';
import Counter from 'Counter';
import Footer from './Footer';
import Home from './Home';
import Profile from './Profile';
import ProfilePost from './ProfilePost';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Route exact path='/' component={Home}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/profile/:postId' component={ProfilePost}/>
                <Footer/>
            </div>
        </Router>
    );
};
export default App;
