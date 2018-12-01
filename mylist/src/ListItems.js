import React, { Component } from 'react';
import './App.css';
import ListItems from './ListItems'


class ListItems extends Component {

  render() {
    return (
        <ul>{this.state.list.map((item, index) => {
        return(<li key = {index} className = "myList"> 
        {item} 
        </li>)
        })}
        </ul>
    );
  }
}

export default listItems;
