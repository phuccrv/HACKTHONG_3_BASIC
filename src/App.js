import "./App.css";
import React, { useState } from "react";
import HeaderComponent from './Interface';
import FormNote from './TextNote';
import { BiTrash,BiPencil } from "react-icons/bi";

function App() {
  const [notes, setNotes] = useState([]);

  const handleDeleteNote = (index) => {
    setNotes(prevNotes => prevNotes.filter((note, i) => i !== index));
  };

  return (
    <>
      <HeaderComponent />
      <FormNote setNotes={setNotes} />
      <div className="notesList">
        {notes.map((note, index) => (
          <div className="listText" key={index}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div className="deleteNote" onClick={() => handleDeleteNote(index)}>
              <BiTrash />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
