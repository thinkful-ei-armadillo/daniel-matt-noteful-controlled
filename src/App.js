import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainPageList from './components/MainPageList/MainPageList';
import MainPageNav from './components/MainPageNav/MainPageNav';
import NotePageSidebar from './components/NotePage/NotePageSidebar';
import NotePageMain from './components/NotePage/NotePageMain';
import AddNote from './components/AddNote/AddNote';
import UserContext from './Context';
import AddFolder from './components/AddFolder/AddFolder';
import './App.css';

// task functions for getting specific folders and notes from state
export const getNotes = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folderId === folderId)
)

export const findNote = (notes=[], noteId) => notes.find(note => note.id === noteId)

export const findFolder = (folders=[], folderId) => folders.find(folder => folder.id === folderId)

// main App
class App extends Component {
  state = {
    notes: [],
    folders: [],
  }

  componentDidMount() {
    
    // need to construct API get and delete requests using JSON server at localhost:9090
    const URL = 'http://localhost:9090/';

    // basic fetch template to start from:
    fetch(URL + 'notes')
      .then((res) => {
        if (res.ok) {
          console.log('folders API response ok!')
          return res.json();
        } else {
          throw new Error('Failed to get folders from API');
        }
      })
      .then((notes) => {
        this.setState({
          notes: notes,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
          loading: false,
        });
      });

      fetch(URL + 'folders')
      .then((res) => {
        if (res.ok) {
          console.log('notes API response ok!')
          return res.json();
        } else {
          throw new Error('Failed to get notes from API');
        }
      })
      .then((folders) => {
        this.setState({
          folders: folders,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
          loading: false,
        });
      });
  }

  //render sidebar routes
  renderSidebar() {
    console.log('sidebar rendered!')
    // const { notes, folders } = this.state
    return (
      <>
          {['/', '/folder/:folderId'].map(path =>
           <Route 
           exact
           key={path}
           path={path}
           component={MainPageNav}
            />
          )}
          <Route
          path='/note/:noteId'
          component={NotePageSidebar}/>
            <Route
            path='/add-folder'
            component={MainPageNav}
            />
            <Route
            path='/add-note'
            component={NotePageSidebar}
        />
      </>
    );
  }
  // then render the main routes
  renderMain() {
    console.log('main rendered!')
    
    return (
      <>
        {['/', '/folder/:folderId'].map(path => {
        return (
        <div className="notes-list">
          <Route 
            exact
            key={path}
            path={path}
            component={MainPageList}/>
        </div>)
        })}
            <Route
              path='/note/:noteId'
              component={NotePageMain}
              render={routeProps => {
                const { noteId } = routeProps.match.params
                const note = findNote(this.state.notes, noteId)
                return (
                  <NotePageMain
                    note={note}
                    {...routeProps}
                  />
                )
              }}
            />
            <Route
            path='/add-folder'
            component={AddFolder}
            />
            <Route
              path='/add-note'
              component={AddNote}
                  />
    </>
    )}

  // then render everything
  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders
    }
    return (
      <UserContext.Provider
        value={value}>
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
        </UserContext.Provider>
    );
  }
}

export default App;
