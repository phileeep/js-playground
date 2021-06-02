import React from "react";
import logo from '../logo.svg';

export class Body extends React.Component{
  render(){
    return(
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>It's time to learn react</h1>
        <p>That is nice that</p>
      </div>
    )
  }
}

