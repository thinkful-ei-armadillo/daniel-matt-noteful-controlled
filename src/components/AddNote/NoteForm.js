import React, { Component } from 'react';

export default function NoteForm(props) {
  const { ...otherProps } = props
  return (
    <form action='#'
    {...otherProps}
    />
  )
}