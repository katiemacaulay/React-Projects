import React, { Component } from 'react';
import './App.css';

class ListItems extends Component {

  render() {
    return (
      <ul>{this.props.allTheListItems.map((item, index) => {
      return(<li key = {index} className = "myList"> 
      {item} 
      </li>)
      })}
    );
  }
}

export default ListItems;
