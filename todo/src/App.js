import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import ToDo from './components/ToDo';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Form from './components/Form';
import TaskContainer from './components/Tasks/Container';
import Users from './components/Users';
import './App.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/todo' component={ToDo}/>
                    <Route path='/counter' component={Counter}/>
                    <Route path='/form' component={Form}/>
                    <Route path='/users' component={Users}/>
                    <Route path='/tasks' component={TaskContainer}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
