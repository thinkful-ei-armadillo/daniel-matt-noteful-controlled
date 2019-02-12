import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Note from '../Note/Note';

export default function MainPageList(props) {
  return (
    <section className="MainPageList">
      <ul>
        {props.notes.map( note => {
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
  );
}

MainPageList.defaultProps = {
  notes: []
}