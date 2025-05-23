import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log('useEffect ran because the component rendered');
  });

  return (
    <div style={{ padding: '2rem' }}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;



 
