import React, { Component } from 'react';
import Form from '../Form';
import './AddFolder.css';

export default class AddFolder extends Component {
  // validate add folder input data

  // then POST to API here using a fetch block

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