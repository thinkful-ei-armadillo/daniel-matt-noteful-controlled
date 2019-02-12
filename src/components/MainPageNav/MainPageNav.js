import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

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