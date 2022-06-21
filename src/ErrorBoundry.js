import React from "react";

class ErrorBoundry extends React.Component {
  construcotr(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  render() {
    if(this.state.hasError) {
      return <h1 className="tc">Oppppss .. We are sorry but the website could not load proprely</h1>
    } else {
      return this.props.children;
    }    
  }
}