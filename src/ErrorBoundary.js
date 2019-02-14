import React from 'react';

export default class ErrorPage extends React.Component {
  state = {error: null};
  static getDerivedStateFromError(error) {
      // Called when an error is thrown in a child component
      console.error(error);
      // Store the error in the state
      this.setState({error});
  }
  render() {
      // If there was an error, show an error page
      if (this.state.hasError) {
          return (
              <main className="error-page">
                  <h1>Something seems to have gone wrong</h1>
                  <p>Try refreshing the page</p>
              </main>
          );
      }
      // Otherwise, render the children
      return this.props.children;
  }
}