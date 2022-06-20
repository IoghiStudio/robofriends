import React from "react";
import "./Hello.css";

class Hello extends React.Component {
  render() {
    return(
      <div>
        <h1 className="title">I love pizza</h1>
        <p>Who does not love pizza....</p>
      </div>
    )
  }
}

export default Hello;