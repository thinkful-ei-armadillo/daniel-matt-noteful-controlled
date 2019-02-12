import React from 'react';
import './NotePageSidebar.css';

export default function NotePageSidebar(props) {
  return (
    <div className='NotePageNav'>
      <button
        tag='button'
        role='link'
        onClick={() => props.history.goBack()}
      >
        Back
      </button>
      {props.folder && (
        <h3 className='NotePageNav__folder-name'>
          {props.folder.name}
        </h3>
      )}
    </div>
  )
}

NotePageSidebar.defaultProps = {
  history: {
    goBack: () => {}
  }
}