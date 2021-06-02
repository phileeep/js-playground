import React from "react";

export class Header extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-default navbar-light bg-light">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><a class="navbar-brand" href="#">Welcome To React</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}