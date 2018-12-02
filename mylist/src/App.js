import React, { Component } from 'react';
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

  removeItem = (index) => {
    const listCopy = this.state.list.slice()
    listCopy.splice(index, 1)
    this.setState({
      list: listCopy,
    })
  }
  

  render() {
    return (
      <div className="App">
        <header className = "App-header">
          <h1> My List </h1>
          <ListItems allTheListItems = {this.state.list} removeItem = {this.removeItem}/>
          <form onSubmit = {this.addToList}> 
            <input value = {this.state.input} onChange = {this.onChange} placeholder = 'add list item here'></input>
            <button>Add Item</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
