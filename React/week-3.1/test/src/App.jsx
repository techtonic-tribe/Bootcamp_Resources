import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: "22rem" }}>
      <h1>Controlled Input</h1>
      <label htmlFor="name-input">Name</label>
      <input
        id="name-input"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
      />
      <p>Preview: {name || "(waiting for input)"}</p>
    </main>
  );
}

export default App;
