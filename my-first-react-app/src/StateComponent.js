import React, { Component } from "react";

class StateComponent extends Component{
  constructor(){
    super();

    this.state = {
      count: 0,
    }
    this.countUp = this.countUp.bind(this)
  }

  render() {
    return (
      <div>
        <div className="container">
          <button onClick={this.countUp}>Click me!</button>
          <p>{this.state.count}</p>
        </div>
      </div>
    )
  }
}

export default StateComponent;