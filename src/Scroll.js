import React from "react";

class Scroll extends React.Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Scroll;