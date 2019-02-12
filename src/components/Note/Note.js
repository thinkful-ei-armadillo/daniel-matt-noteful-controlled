import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export default function Note(props) {
  return(
    <div className="Note">
      <h2>
        <Link to={`/note/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <p>Modified: {props.modified}</p>
      <button>Delete</button>
    </div>
  )
}