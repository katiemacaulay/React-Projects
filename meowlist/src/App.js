import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import sleepycat from './sleepycat.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={sleepycat} className="App-logo" alt="logo" />
          <Button> Make a note before you fall asleep!</Button>
        </header>
      </div>
    );
  }
}

export default App;
