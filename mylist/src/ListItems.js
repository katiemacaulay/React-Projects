import React, { Component } from 'react';

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
