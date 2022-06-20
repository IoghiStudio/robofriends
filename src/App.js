import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App  extends React.Component {
  render() {
    return(
      <div>
        <SearchBox />
        <CardList />
      </div>
    )
  }
}

export default App;