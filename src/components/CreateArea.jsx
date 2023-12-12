import React, { useState }from "react";

function CreateArea() {

  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
    console.log("inputText: ", inputText);
  }

  function addItem(event) {
    setNotes(prevNotes => {
      return [...prevNotes, inputText];
    });
  
    setInputText("");
    event.preventDefault();
    
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name={inputText} placeholder="Title" value={inputText}/>
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button onClick={addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
