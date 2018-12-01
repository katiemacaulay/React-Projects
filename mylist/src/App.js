import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'

class App extends Component {

  state = {
    input: '',
    list: [
      'cat',
      'dog',
      'mouse'
    ], 
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }

  addToList = (e) => {
    e.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.input],
      input: '',
    })
  }


  render() {
    return (
      <div className="App">
        <header className = "App-header">
          <h1> My List </h1>
          <form onSubmit = {this.addToList}> 
            <input onChange = {this.onChange} placeholder = 'add list item here'></input>
            <button>Add Item</button>
            ListItems
            {/* <ul>{this.state.list.map((item, index) => {
            return(<li key = {index} className = "myList"> 
            {item} 
            </li>)
            })}
            </ul> */}
          </form>
        </header>
      </div>
    );
  }
}

export default App;
