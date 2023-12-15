import React, { Component, PureComponent } from 'react';

class PureCounterComponent extends PureComponent{
  constructor() {
    super();

    this.state = {
      count: 0,
      toggle:true
    };
  }

  handleIncrement = () => {
      if(this.state.toggle){
          this.setState({ count: this.state.count + 1 });
      }
      else{
        this.setState({count:this.state.count})
      }
  };
handleToggle=()=>{
    this.setState({toggle:!this.state.toggle})
}
  render() {
    console.log("hello pure")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleToggle}>toggle</button>
      </div>
    );
  }
}

export default PureCounterComponent;
