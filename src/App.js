import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './dummy-store'
import './App.css';


class App extends Component {
  state = {
    notes: [],
    folders: [],
  }

  //render sidebar routes
  renderSidebar() {
    const { notes, folders } = this.state
    return (
        <>
            <Route path='/' component={MainSidebar} />
            <Route path='/foo' component={FooSidebar} />
            <Route path='/' component={MainMain} />
            <Route path='/foo' component={FooMain} />
        </>
    );
  }
  // then render the main routes
  renderMain() {
    const { notes, folders } = this.state
    return (
        <>
            <Route path='/' component={MainSidebar} />
            <Route path='/foo' component={FooSidebar} />
            <Route path='/' component={MainMain} />
            <Route path='/foo' component={FooMain} />
        </>
    );
  }

  // then render everything
  render() {
    
    return (
        <div className="app">
          <nav>
            {this.renderSidebar()}
          </nav>
          <header>
            <h1>
              <Link to='/'>Noteful</Link>
              </h1>
          </header>
          <main>
            {this.renderMain()}
          </main>
        </div>
    );
  }
}

export default App;
