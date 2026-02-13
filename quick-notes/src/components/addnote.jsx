import { useState } from "react";

export default function AddNote({ onAdd }) {

  const [noteTitle, setNoteTitle] = useState("");
  const [textArea, setTextArea] = useState("");

  function handleAddClick() {


    onAdd(noteTitle, textArea);

    setNoteTitle("");
    setTextArea("");
  }

  return (
    <div>
      <h2>AddNote</h2>

      <div>
        <h3>Title:</h3>
        <input
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <h2>Body: </h2>
        <br />
        <textarea
          rows={5}
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}

        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleAddClick}>Add note</button>
      </div>
    </div>
  );
}