import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './myButton'

class App extends Component {

  state = {
    button1: 0,
    button2: 0,
    button3: 0
  }

  counterCounter(buttonName){
    const newCounter = this.state[buttonName] + 1;
    this.setState({[buttonName]: newCounter})
  }

  render() {
    return (
      <div>
        <h3>{this.state.button1}</h3>
        <MyButton name="button1" click={(name) => this.counterCounter(name)} />
        <h3>{this.state.button2}</h3>
        <MyButton name="button2" click={(name) => this.counterCounter(name)} />
        <h3>{this.state.button3}</h3>
        <MyButton name="button3" click={(name) => this.counterCounter(name)} />
      </div>
    );
  }
}

export default App;
