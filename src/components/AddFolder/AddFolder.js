import React, { Component } from 'react';
// import Form from '../Form';
import './AddFolder.css';
import UserContext from '../../Context';

export default class AddFolder extends Component {
  state = {
    folderName: ""
  }

  static contextType = UserContext;

  // take add folder input data and store in state
  setFolder = (name) => {
    console.log(name)
    this.setState({folderName: name})
  }

  handleFolder = (e) => {
    e.preventDefault();
    const newFolderName = this.context.addFolderName
    newFolderName(this.state.folderName)

    let nameToJson = JSON.stringify({name: this.state.folderName});

    fetch("http://localhost:9090/folders",
    {method: 'POST', 
    headers: new Headers({ 'Content-Type': 'application/json' }), 
    body: nameToJson
  })
      .then(res => {
        console.log(res)
        if (!res.ok) {
          return res.json();
        }
      })
      .catch(err => alert(err.message))

      this.props.history.push('/');
  }
  
render () {
    return (
      <section className="addFolderForm">
        <h2>Create A Folder</h2>
        <form onSubmit={(e) => this.handleFolder(e)}>
          <input 
            type="text" 
            placeholder="folder name"
            onChange={e => this.setFolder(e.target.value)}
            required/>
          <button type="submit">Submit</button>
        </form>
      </section>
    )
}
}