import React, { Component } from "react";
class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 }; // Initial countdown value
    this.timer = null; // Initialize timer as null
  }
  // Start timer when component mounts
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }, 1000);
  }
  // Stop timer when count reaches 0
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      clearInterval(this.timer);
      this.timer = null; // Reset timer after clearing
    }
  }
  // Clear timer when component is removed
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  render() {
    return (
      <div>
        <h1>Countdown Timer (Class Component)</h1>
        <h2>{this.state.count > 0 ? this.state.count : "Time's up!"}</h2>
      </div>
    );
  }
}
export default CountdownTimer;