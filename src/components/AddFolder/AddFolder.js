import React, { Component } from 'react';
// import Form from '../Form';
import './AddFolder.css';

export default class AddFolder extends Component {
  
  // take add folder input data and store in state
  

  // then POST to API here using a fetch block
    

  
  
render () {
    return (
      <section className="addFolderForm">
        <h2>Create A Folder</h2>
        <form onSubmit={e => this.setFolder(e.target.value)}>
          <input 
            type="text" 
            placeholder="folder name" 
            // value={this.state.folder.name}
            />
          <button type="submit">Submit</button>
        </form>
      </section>
    )
}
}