import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import { useState } from "react";
function FormNote({ setNotes }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  
    const handleAddNote = () => {
      const newNote = {
        title: title,
        content: content
      };
  
      setNotes(prevNotes => [...prevNotes, newNote]);
  
      setTitle("");
      setContent("");
    };
  
    return (
      <div className="formText">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Take a note..."
          value={content}
          onChange={event => setContent(event.target.value)}
        />
        <div className="addNote" onClick={handleAddNote}>
          <BiPlusCircle />
        </div>
      </div>
    );
  }
  
  export default FormNote;