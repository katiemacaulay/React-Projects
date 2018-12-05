import React, { Component } from 'react';
import './App.css';

class ListItems extends Component {


  render() {
    return (
      <ul>{this.props.allTheListItems.map((item, index) => {
      return(<li key = {index} index = {index} className = "myList" onClick = {this.removeItem}> 
      {item} <button name="removeTask" onClick={() =>this.props.removeItem({index})}>x</button>
      </li>)})
      }
      </ul>
    )
  }
}

export default ListItems;
