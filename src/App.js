import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'

import Nav from './components/Nav'
import Name from './components/Name'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className='background'>
            <Nav />
            <Helmet>
               <title>Matthew K Yee</title>
            </Helmet>
            <Route exact path ="/" component={Name}/>
            <Route path ="/aboutme" component={AboutMe}/>
            <Route path ="/projects" component={Projects}/>
            <Route path ="/contact" component={Contact}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
