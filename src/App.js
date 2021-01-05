import React, { Component } from 'react';
import './App.css';
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from './components/sidebar'
import About from './components/about'
import Skills from './components/skills'
import Experience from './components/experience'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
        <React.Fragment>
          <GlobalStyle />
          <Router>
            <Sidebar></Sidebar>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/about-me" component={About} />
              <Route exact path="/skills-and-interests" component={Skills} />
              <Route exact path="/experience" component={Experience} />
            </Switch>
          </Router>
        </React.Fragment>

		<div id="colorlib-main">
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
