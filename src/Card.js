import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return(
      <div className="tc bg-light-green dib br4 pa2 ma2 grow bw2 shadow-5">
        <img alt="roboimage" src={`https://robohash.org/${this.props.random}`}></img>
        <div className="textFont">
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
        </div>
      </div>
    )
  }
}

export default Card;