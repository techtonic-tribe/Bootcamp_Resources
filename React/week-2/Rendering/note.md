

# 📘 React Rendering – Complete Guide for Beginners

---

##  1. What is Rendering?

> **Rendering** in React means **displaying content (UI)** on the screen based on what your component returns using **JSX**.

###  Simple Example:

```jsx
function Hello() {
  return <h1>Hello, World!</h1>;
}
```

React **renders** the `<h1>` element and shows:

```
Hello, World!
```

…on the web page.

---

## 🧩 2. Types of Rendering

Now let’s explore the different **types of rendering** that React performs.

---

### 🟢 A. **Initial Rendering**

Happens **the first time** a component is shown in the browser.

📌 Example:

```jsx
function Welcome() {
  return <h1>Welcome!</h1>;
}
```

When the component is mounted, React renders it on the screen.

---

### 🔄 B. **Re-rendering**

Happens when:

* **state** changes
* **props** change

📌 Example:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
```

 Every time the button is clicked, `count` changes → component **re-renders**.

---

### ❓ C. **Conditional Rendering**

 Showing different content **based on a condition** (like login status).

📌 Example:

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in</h2>}
    </div>
  );
}
```

 If `isLoggedIn` is `true`, it shows “Welcome back!”
If `false`, it shows “Please log in”.

---

### 📜 D. **List Rendering**

 When you have an **array of data**, and want to render **each item** on the screen using `map()`.

📌 Example:

```jsx
const students = ['Ali', 'Fatima', 'Omar'];

function StudentList() {
  return (
    <ul>
      {students.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
```

 React renders each item in the array as a list element (`<li>`).

---

## 🆚 3. Static vs Dynamic Rendering

| Type                  | Meaning                                                | Example                                              |
| --------------------- | ------------------------------------------------------ | ---------------------------------------------------- |
| **Static Rendering**  | UI does **not change** after first render              | Simple text: `<h1>Welcome</h1>`                      |
| **Dynamic Rendering** | UI **changes** based on **state, props, user actions** | Button click increases count, user logs in/out, etc. |

---

###  Static Example:

```jsx
function StaticHello() {
  return <h1>Hello, Guest</h1>;
}
```

→ Always shows the same message.

---

###  Dynamic Example:

```jsx
import React, { useState } from 'react';

function DynamicHello() {
  const [name, setName] = useState('Guest');

  return (
    <div>
      <h1>Hello, {name}</h1>
      <button onClick={() => setName('Ali')}>Set Name</button>
    </div>
  );
}
```

→ Initially says “Hello, Guest”
→ After clicking button, says “Hello, Ali” → That’s **dynamic rendering**.

---

## 🛠️ 4. Simple Project: All-in-One Demo

This React component shows:

✅ Initial rendering
✅ Re-rendering on button click
✅ Conditional rendering (login/logout)
✅ List rendering using `map()`
✅ Dynamic rendering using `useState`

---

### 📂 `App.js`

```jsx
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
```

---

### 🧪 What Students Will Learn From This Project:

| Feature               | Where to Look in Code                        |
| --------------------- | -------------------------------------------- |
| Initial Render        | When the app first loads                     |
| Re-rendering          | When clicking “Increment” button             |
| Conditional Rendering | `isLoggedIn ? ... : ...`                     |
| List Rendering        | `students.map(...)` to display student names |
| Static vs Dynamic     | Static: title; Dynamic: count, login toggle  |

