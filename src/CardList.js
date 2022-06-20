import React from "react";
import Card from "./Card";
import { robots } from "./robots";

class CardList extends React.Component {
  render() {
    const cardArray = robots.map((user , i) => {
      return <Card 
      key={robots[i].id} 
      name={robots[i].name} 
      email={robots[i].email} 
      random={robots[i].random} />
    }) 
    return(
      <div>
        {cardArray}
      </div>
    )
  }
}

export default CardList;
