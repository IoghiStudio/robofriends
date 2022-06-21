import React from "react";

class SearchBox extends React.Component {
  render() {
    return(
      <div className="pa2">
        <h1>Robofriends</h1>
        <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" ></input>
      </div>
    )
  }
}

export default SearchBox;