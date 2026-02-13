import { useState } from "react";

function AddNote({ notes, setNotes }) {
  const [text, setText] = useState("");

  function addNote() {
    const newNote = {
      id: Date.now(),
      content: text,
    };
  }

  setNotes([...notes, newNote]);
  setText("");
};

return (
  <div>
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type note"
    />
    <button onClick={addNote}>Add note</button>
  </div>
);
}

export default AddNote;
