
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
            />
          );
        })}
      </div>
    
</>
  );
}



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
      
//         <p>
//           Edit <code>src/App.jsx</code> galgalgal
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
