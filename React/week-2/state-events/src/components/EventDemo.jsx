import React from 'react';

function EventDemo() {
  const handleClick = (id) => {
    alert('Item ID: ' + id);
  };

  return (
    <div>
      <h2>Event Handling</h2>
      <ul>
        {[1, 2, 3].map(id => (
          <li key={id}>
            Item {id} <button onClick={() => handleClick(id)}>Alert ID</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventDemo;
