import React, { Component } from 'react';
import Form from '../Form';
import './AddFolder.css';

export default class AddFolder extends Component {
render () {
    return (
      <section className="addFolderForm">
        <h2>Create A Folder</h2>
        <Form>
          <input type="text" placeholder="folder name" />
          <button type="submit">Submit</button>
        </Form>
      </section>
    )
}
}