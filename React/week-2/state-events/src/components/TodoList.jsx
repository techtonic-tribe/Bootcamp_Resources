import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    setItems(prevItems => [...prevItems, input]);
    //[...prevItems, input]: The spread operator (...) creates a new array containing all elements of prevItems, followed by the new input value at the end.
    setInput('');
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
