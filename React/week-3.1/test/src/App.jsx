import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [name, setName] = useState("");

  return (
    <>

    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Your name: {name}</p>
    </div>

    </>
  );
}

export default App;
