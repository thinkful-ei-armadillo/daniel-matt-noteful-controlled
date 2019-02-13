import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../../Context';
import './MainPageNav.css';

export default class MainPageNav extends React.Component {
  render () {
    const { folders=[], notes=[] } = this.context;
  return (
    <UserContext.Consumer>
      {({folders}) => (
        <div className="MainPageNav">
          <ul>
            {folders.map(folder => {
              return <li key={folder.id}>
                <NavLink
                className="MainPageNav-Link"
                to={`/folder/${folder.id}`}>
                  {folder.name}
                </NavLink>
              </li>
            })}
          </ul>
          <button>
            <Link
            to={'/add-folder'}
            type='button'>
            Add Folder
            </Link>
          </button>
        </div>
    )}
    </UserContext.Consumer>
  )
}
}

MainPageNav.defaultProps = {
  folders: []
}