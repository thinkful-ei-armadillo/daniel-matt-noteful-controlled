import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../../Context';
import './MainPageNav.css';

export default class MainPageNav extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    },
    goBack: () => {}
  }

  static contextType = UserContext;

  render () {
    const { folders=[], notes=[] } = this.context;
  return (
        <div className="MainPageNav">
          <ul>
            {folders.map((folder) => {
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
  )
}
}

MainPageNav.defaultProps = {
  folders: []
}