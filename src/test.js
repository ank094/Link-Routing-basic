import React, { Component } from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    console.log(this.props.name);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        {this.props.name}

        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}
