import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leaderboard from './Components/LeaderBoard/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <strong>Free Code Camp React <img src={logo} className="App-logo" alt="logo" /> Project: </strong>

          <h1 className="App-title">Camper Leaderboard</h1>
        </header>
        <p className="App-intro">
          <Leaderboard />
        </p>
      </div>
    );
  }
}

export default App;
