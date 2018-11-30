import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    list: [
      'cat',
      'dog',
      'mouse'
    ]
  }

  render() {
    return (
      <div className="App">
        <h1> My List </h1>
        <form> 
          <ul>{this.state.list.map((item, index) => {
          return(<li key = {index} className = "myList"> {item} </li>)
          })}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
