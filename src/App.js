import "./App.css";
import React, { useState } from "react";
import HeaderComponent from './Interface';
import FormNote from './TextNote';
import { BiTrash, BiPencil } from "react-icons/bi";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [tempNote, setTempNote] = useState({
    title: "",
    content: ""
  });

  const handleDeleteNote = (index) => {
    setNotes(prevNotes => prevNotes.filter((note, i) => i !== index));
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setTempNote({
      title: note.title,
      content: note.content
    });
  };

  const handleUpdateNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = tempNote;
    setNotes(updatedNotes);
    setEditingNote(null);
  };

  return (
    <>
      <HeaderComponent />
      <FormNote
        setNotes={setNotes}
        editingNote={editingNote}
        setEditingNote={setEditingNote}
        tempNote={tempNote}
        setTempNote={setTempNote}
        handleUpdateNote={handleUpdateNote}
      />
      <div className="notesList">
        {notes.map((note, index) => (
          <div className="listText" key={index}>
            {editingNote === note ? (
              <div>
                <input
                  type="text"
                  value={tempNote.title}
                  onChange={event =>
                    setTempNote(prevNote => ({
                      ...prevNote,
                      title: event.target.value
                    }))
                  }
                />
                <input
                  type="text"
                  value={tempNote.content}
                  onChange={event =>
                    setTempNote(prevNote => ({
                      ...prevNote,
                      content: event.target.value
                    }))
                  }
                />
                <div className="updateNote" onClick={() => handleUpdateNote(index)}>
                  Lưu
                </div>
              </div>
            ) : (
              <>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <div className="deleteNote" onClick={() => handleDeleteNote(index)}>
                  <BiTrash />
                </div>
                <div className="editNote" onClick={() => handleEditNote(note)}>
                  <BiPencil />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
