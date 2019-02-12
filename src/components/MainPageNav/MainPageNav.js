import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MainPageNav.css';

export default function MainPageNav(props) {
  return (
    <div className="MainPageNav">
      <ul>
        {props.folders.map(folder => {
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

MainPageNav.defaultProps = {
  folders: []
}