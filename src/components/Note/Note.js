import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import UserContext from '../../Context';

class Note extends React.Component {
  static contextType = UserContext;

  render() {
    // set prop
    const { name, id, modified } = this.props;
    return (
      <div className="note-item">
        <h2>
          <Link to={`/note/${id}`}>
            {name}
          </Link>
        </h2>
          <p>Modified: {format( modified, 'Do MMM YYYY' )}</p>
        <button>Delete</button>
      </div>
    )
  }
}

export default Note;