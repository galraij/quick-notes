
import { useState } from "react";
import AddNote from "./components/AddNote";
import NoteComponent from "./components/NoteComponent";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(title, text) {
    const newNote = {
      id: Date.now(),
      title: title,
      text: text,
      createdAt: new Date(),
    };

    setNotes([...notes, newNote]);
  }

  function deleteNote(id) {
    const userConfirmed = window.confirm(
      "Are you sure?"
    );

    if (userConfirmed == false) {
      return;
    }

    const updatedNotes = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(updatedNotes);
  }


  return (
    <>
      <div>
        <AddNote onAdd={addNote} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        {notes.map((note) => {
          return (
            <NoteComponent
              key={note.id}
              noteDate={note.createdAt}
              noteTitle={note.title}
              textArea={note.text}
              onDelete={() => deleteNote(note.id)}
            />
          );
        })}
      </div>

    </>
  );
}



