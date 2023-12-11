import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      {/* {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))} */}
      <Note key={1} title="Note title" content="Note content" />
      <Footer />  
    </div>
  );
}
        

export default App;




   
   


