import React, { Component, useState } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
    }
  }

  // bind ArrowRight keydown event
  componentDidMount() {
    window.addEventListener("keydown", this.handleBall, false);
  }

  componentWillUnmount() {
    // removing listener to prevent memory leak
    window.removeEventListener("keydown", this.handleBall, false);
  }

  handleBall = (event) => {
    if (event.keyCode == 39) {
      // move ball by 5 px
      this.setState((previousState) => ({
        ballPosition: {
          left: `${parseInt(previousState.ballPosition.left) + 5}px`,
        },
      }));
    }
  };
  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
