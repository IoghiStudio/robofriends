import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return(
      <div className="bg-light-green dib br4 pa2 ma2 grow">
        <img alt="roboimage" src="https://robohash.org/buci"></img>
        <div>
          <h2>Nicu Iorga</h2>
          <p>Ioghistudio20382gmail.com</p>
        </div>
      </div>
    )
  }
}

export default Card;