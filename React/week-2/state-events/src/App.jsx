import React from 'react';
import Counter from './components/Counter';
import FormHandler from './components/FormHandler';
import EventDemo from './components/EventDemo';

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>React State & Events Lecture</h1>
      <Counter />
      <hr />
      <FormHandler />
      <hr />
      <EventDemo />
    </div>
  );
}

export default App;
