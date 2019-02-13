import React from 'react';
import { Link } from 'react-router-dom';
import Note from '../Note/Note';
import UserContext from '../../Context';
import './MainPageList.css'

class MainPageList extends React.Component {
  render () {
  return (
    <UserContext.Consumer>
      {({notes}) => (
        <section className="MainPageList">
          <ul>
            {notes.map( note => {
              return <li key={note.id}>
                <Note 
                id={note.id}
                name={note.name}
                modified={note.modified}
                />
              </li>
              }
            )}
          
          </ul>

          <button>
            <Link 
              to='/add-note'
              type='button'>
              Add Note
            </Link>
            </button>
        </section>
        )}
    </UserContext.Consumer>
  );
}
}


MainPageList.defaultProps = {
  notes: []
}

export default MainPageList;