import React, { Component } from 'react';
import NoteForm from './NoteForm';

export default class AddNote extends Component {
  static defaultProps = {
    folders: []
  }
  render () {
    const {folders} = this.props
    return (
      
      <section>
        <h2>Add A Note</h2>
        <NoteForm>
          <input type="text" placeholder="name" />
          <input type="textarea" placeholder="description" />
          <select id='note-folder-select'>
          <option value="null">...</option>
          {folders.map(folder =>
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              )}
          </select>
        </NoteForm>
      </section>
    )
  }
}