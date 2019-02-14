import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null
    };
  }
  static componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error: error,
      info: info
    });
  }

//   static getDerivedStateFromError(error) {
//     // Called when an error is thrown in a child component
//     console.error(error);
//     // Store the error in the state
//     this.setState({error});
// }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops, something went wrong :(</h1>
          <p>The error: {this.state.error.toString()}</p>
        </div>
      );
    }
    return this.props.children;
  }
}