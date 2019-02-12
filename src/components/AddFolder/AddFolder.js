import React, { Component } from 'react';
import NoteForm from './NoteForm';

export default class AddFolder extends Component {
render () {
    return (
      <section>
        <h2>Create A Folder</h2>
        <NoteForm>
          <input type="text" placeholder="folder name" />
          <button type="submit"></button>
        </NoteForm>
      </section>
    )
}
}