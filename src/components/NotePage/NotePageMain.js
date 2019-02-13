import React from 'react';
import Note from '../Note/Note';
import UserContext from '../../Context';
import {findNote} from '../../App';
import './NotePageMain.css';

 export default class NotePageMain extends React.Component {
   static defaultProps = {
     match: { params: {}}
   }

   static contextType = UserContext;

   render () {
    const { notes=[] } = this.context
    const { noteId } = this.props.match.params
    const note = findNote(notes, noteId) || {content: ''}

    console.log(note);
    
    return (
      
          <section className='NotePageMain'>
            <Note
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
            <div className='note-content'>
              {note.content.split('/n').map((para, i) =>
                <p key={i}>{para}</p>
              )}
            </div>
          </section>
        )}
    
}