import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h3>Go ahead, try something new!</h3>
          <img style={{maxWidth: 720}} src="https://travishowell.net/wp-content/uploads/2019/03/20160515_164716.jpg"/>
          <p>Why not <a href="https://travishowell.net/" target="_blank">brew some beer</a>!</p>
          <button>Nah, beer sucks</button>
        </div>
      </div>
    );
  }
}

export default App;
