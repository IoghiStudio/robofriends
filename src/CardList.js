import React from "react";
import Card from "./Card";
import { robots } from "./robots";

class CardList extends React.Component {
  render() {
    return(
      <div>
        {
          robots.map((user , i) => {
      return <Card 
      key={robots[i].id} 
      name={robots[i].name} 
      email={robots[i].email} 
      random={robots[i].random} />
        })
        }
      </div>
    )
  }
}

export default CardList;
