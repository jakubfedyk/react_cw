import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import './App.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route path='/' component={Dashboard}/>
                    <Route path='/todo' component={null}/>
                    <Route path='/counter' component={null}/>
                </div>
            </Router>
        );
    }
}

export default App;
