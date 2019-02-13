import React from 'react';
import './NotePageSidebar.css';
import UserContext from '../../Context';

class NotePageSidebar extends React.Component {
  render () {
    return (
      <UserContext.Consumer>
        {({folders}) => (
            <div className='NotePageNav'>
              <button
                tag='button'
                role='link'
                onClick={() => this.history.goBack()}
              >
                Back
              </button>
              {folders && (
                <h3 className='NotePageNav__folder-name'>
                  {folders.name}
                </h3>
              )}
            </div>
        )}
      </UserContext.Consumer>
    )
  }
}

NotePageSidebar.defaultProps = {
  history: {
    goBack: () => {}
  }
}

export default NotePageSidebar;