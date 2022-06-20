import React from "react";
import "./hello.css";

class Hello extends React.Component {
  render() {
    return(
      <div className="f1 tc">
        <h1 className="title">I love pizza</h1>
        <p>Who does not love pizza....</p>
        <p>{this.props.greeting}</p>
      </div>
    )
  }
}

export default Hello;