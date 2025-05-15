import React, { useState } from 'react';
import './App.css'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [count, setCount] = useState(0);
  const students = ['Ali', 'Fatima', 'Omar'];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎯 React Rendering Demo</h1>

      {/* 1. Initial + Conditional Rendering */}
      <h2>{isLoggedIn ? 'Welcome back, User!' : 'Please log in'}</h2>

      {/* 2. Toggle Login State */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      {/* 3. Re-rendering with state */}
      <div style={{ marginTop: '20px' }}>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      {/* 4. List Rendering */}
      <div style={{ marginTop: '20px' }}>
        <h3>Student List:</h3>
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      </div>

      {/* 5. Dynamic Rendering based on state */}
      {count > 5 && <p>🔥 You clicked more than 5 times!</p>}
    </div>
  );
}

export default App;