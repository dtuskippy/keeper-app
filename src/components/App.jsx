import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {
        notes.map((notesItem, index) => 
          <Note 
            id={index}
            key={index} 
            title={notesItem.title }
            content={notesItem.content}
            onDelete={deleteNote}
           />
          )
      }
     <Footer />
    </div>
  );
}

export default App;
