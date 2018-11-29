import React, { Component } from 'react';

class MyButton extends Component {
  constructor(props){
    super(props)
    // this.state ={
    //   counter: 0,
    // }
  }
  
    // counterCounter(){
    //   const newCounter = this.state.counter + 1;
    //   this.setState({counter: newCounter})
    // }
  
    render() {
      return (
       <div>
            <div className="App">
                <button className="button" onClick={() => this.props.click(this.props.name)}>{this.props.name}</button>
                {/* <div>{this.state.counter}</div> */}
            </div>
       </div>
      );
    }
  }
  
  export default MyButton;