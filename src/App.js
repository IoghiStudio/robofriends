import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./app.css";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry"

class App  extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ""
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render() {
    const { robots , searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield);
    });
      return robots.length === 0 ?
        <h1 className="tc">Loading</h1> :
          <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <ErrorBoundry>
                <CardList robots ={filteredRobots} />
              </ErrorBoundry>
            </Scroll>
          </div>
      }
    }


export default App;