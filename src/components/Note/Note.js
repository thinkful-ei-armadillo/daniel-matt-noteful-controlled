import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function Note(props) {
  return(
    <div className="Note">
      <h2>
        <Link to={`/note/${props.id}`}>
          {props.name}
        </Link>
      </h2>
        <p>Modified: {format( props.modified, 'Do MMM YYYY' )}</p>
      <button>Delete</button>
    </div>
  )
}