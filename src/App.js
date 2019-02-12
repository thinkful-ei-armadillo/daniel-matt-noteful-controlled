import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainPageList from './components/MainPageList/MainPageList';
import MainPageNav from './components/MainPageNav/MainPageNav';
import NotePageSidebar from './components/NotePage/NotePageSidebar';
import NotePageMain from './components/NotePage/NotePageMain';
import AddNote from './components/AddNote/AddNote';
import dummyStore from './dummy-store';
import AddFolder from './components/AddFolder/AddFolder';
import './App.css';

const getNotes = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folderId === folderId)
)

const findNote = (notes=[], noteId) => notes.find(note => note.id === noteId)

const findFolder = (folders=[], folderId) => folders.find(folder => folder.id === folderId)

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
    console.log('sidebar rendered!')
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
          path='/note/:noteId'
          render={routeProps => {
            const { noteId } = routeProps.match.params
            const note = findNote(notes, noteId) || {}
            const folder = findFolder(folders, note.folderId)
            return (
              <NotePageSidebar
                folder={folder}
                {...routeProps}
              />
            )
          }}
        />
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
    const { notes, folders } = this.state
    return (
      <>
        {['/', '/folder/:folderId'].map(path => {
        return (<div className="notes-list">
          <Route 
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { folderId } = routeProps.match.params
              const notesForFolder = getNotes(notes, folderId)
              return (<MainPageList
                notes={notesForFolder}
                {...routeProps}
                />
                )
              }}
            />
                </div>)
        })}
            <Route
              path='/note/:noteId'
              render={routeProps => {
                const { noteId } = routeProps.match.params
                const note = findNote(notes, noteId)
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
              render={routeProps => {
                return (
                  <AddNote
                    {...routeProps}
                    folders={folders}
                  />
                )
          }}
        />
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
