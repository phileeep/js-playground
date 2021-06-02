import { Component } from 'react';
import FunctionComponent from "./StateComponent";

class StateApp extends Component {
  constructor(){
    super();

    this.state = {
      count: 0,
    }
    this.countUp = this.countUp.bind(this)
  }

  countUp(){
    this.setState({
      count: this.state.count + 1,
    })
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

export default StateApp;
