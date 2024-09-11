import React, { useState } from "react";

const Todo = () => {
   
    const [notes, setNotes] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim()) {
            setNotes([inputValue, ...notes]);
            setInputValue(""); 
        }
    };

    const handleDelete = (index) => {
        setNotes(notes.filter((_, i) => i !== index)); 
    };

    return (
        <>
            <h1>Todo</h1>
            <input value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} type="text" placeholder="What needs to be done?"/>
            {notes.map((note, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ margin: '0', flexGrow: 1 }}>{note} - {index}</p>
                    <button onClick={() => handleDelete(index)} style={{ marginLeft: '8px' }}>X</button>
                </div>
            ))}
        </>
    );
};

export default Todo;