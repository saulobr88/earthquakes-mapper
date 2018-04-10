import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import EarthquakesContainer from './components/EarthquakesContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <EarthquakesContainer />
        </div>
      </Router>
    );
  }
}

export default App;
