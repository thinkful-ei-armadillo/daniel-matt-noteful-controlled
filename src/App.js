import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './dummy-store';
import MainPageList from './components/MainPageList/MainPageList';
import MainPageNav from './components/MainPageNav/MainPageNav';
import AddNote from './components/AddNote/AddNote';
import './App.css';
import dummyStore from './dummy-store';


class App extends Component {
  state = {
    notes: [],
    folders: [],
  }

  componentDidMount() {
    this.setState(dummyStore);
  }

  //render sidebar routes
  renderSidebar() {
    const { notes, folders } = this.state
    return (
        <>
          {['/', '/folder/:folderId'].map(path =>
           <Route 
           exact
           key={path}
           path={path}
           render={routeProps =>
            <MainPageNav
              folders={folders}
              notes={notes}
              {...routeProps}
              />
            }
            />
          )}
            <Route
            path='/add-folder'
            component={MainPageNav}
            />
          </>
            // <Route path='/' component={MainSidebar} />
            // <Route path='/foo' component={FooSidebar} />
            // <Route path='/' component={MainMain} />
            // <Route path='/foo' component={FooMain} />
        
    );
  }
  // then render the main routes
  renderMain() {
    const { notes, folders } = this.state
    return (
      <>
        {['/', '/folder/:folderId'].map(path => {
        return <div className="notes-list">
          <Route 
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { folderId } = routeProps.match.params
              return (<MainPageList
                notes={notes}
                {...routeProps}
                />
                )
              }}
            />
            <Route
              path='/add-note'
              component={AddNote}
            />
          </div>
        })
      }
    </>
    )}

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
