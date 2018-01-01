import React from 'react';

class Classy extends React.Component {
  constructor(props) {
    super(props);
    state = {
      counter: 5
    };
  }
  componentDidMount() {
    console.log('about to set the state to something else yo');
    this.setState((prevState => prevState.counter + 10))

  }

  render() {
    <h1>My component has mounted and the counter is now {this.state.counter}</h1>

  }
} 

export default Classy;