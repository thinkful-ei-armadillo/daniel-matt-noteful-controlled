import React, { Component } from 'react';
import Form from '../Form';
import UserContext from '../../Context';
import './AddNote.css';

export default class AddNote extends Component {
  static defaultProps = {
    folders: []
  }
  
  static contextType = UserContext;

  // validate add note input data and then store in state

  // then POST to API here using a fetch block

  render () {
    const {folders} = this.props
    return (
      
      <section className="addNoteForm">
        <h2>Add A Note</h2>
        <Form>
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
        </Form>
      </section>
    )
  }
}