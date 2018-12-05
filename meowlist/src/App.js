import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button  style={{background: 'blue'}} color="primary"> Make your List Right Meow!</Button>
        </header>
      </div>
    );
  }
}

export default App;
