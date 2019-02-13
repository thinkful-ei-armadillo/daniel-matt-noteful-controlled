import React from 'react';
import Note from '../Note/Note';
import UserContext from '../../Context';
import findNote from '../../App';
import './NotePageMain.css';

console.log(Note);


 export default class NotePageMain extends React.Component {
   static defaultProps = {
     match: { params: {}}
   }

   static contextType = UserContext;

   render () {
    const { notes=[] } = this.context
    const { noteId } = this.props.match.params
    const note = findNote(notes, noteId) || {}
    
    return (
      // <UserContext.Consumer>
      // {({notes}) => (
          <section className='NotePageMain'>
            <Note
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
            <div className='note-content'>
              {note.content.map((para, i) =>
                <p key={i}>{para}</p>
              )}
            </div>
          </section>
        )}
    // </UserContext.Consumer>
    // )}
}

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}


// old version with props

// export default function NotePageMain(props) {
//   return (
//     <section className='NotePageMain'>
//       <Note
//         id={props.note.id}
//         name={props.note.name}
//         modified={props.note.modified}
//       />
//       <div className='NotePageMain__content'>
//         {props.note.content.split(/\n \r|\n/).map((para, i) =>
//           <p key={i}>{para}</p>
//         )}
//       </div>
//     </section>
//   )
// }

// NotePageMain.defaultProps = {
//  note: {
//    content: '',
//  }
// }