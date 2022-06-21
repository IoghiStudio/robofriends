import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App  extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ""
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield);
    })
    return(
      <div className="tc">
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots ={filteredRobots} />
      </div>
    )
  }
}

export default App;