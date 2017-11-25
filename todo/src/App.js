import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Todo from './components/Todo';
import Counter from './components/Counter';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route path='/' component={Dashboard}/>
                    <Route path='/todo' component={Todo}/>
                    <Route path='/counter' component={Counter}/>
                <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
