import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, N } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (

      <BrowserRouter>
      <div>
        <Navigation/>
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route component={Error}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
