

# ⚛️ React `useEffect` Hook

---

## 1️ What is `useEffect`?

The `useEffect` Hook allows you to **run side effects** in React functional components.

> After React renders the UI, `useEffect` runs **extra code** like fetching data, setting timers, or logging.

---

## 2️Purpose of `useEffect`

* Run code **after rendering**
* Replace lifecycle methods like `componentDidMount` & `componentDidUpdate`
* Handle tasks that shouldn’t run during rendering (e.g., API calls, subscriptions)

---

## what means Replace lifecycle methods like `componentDidMount` & `componentDidUpdate`

---

### What are lifecycle methods?

In **class components** in React, you have special methods called **lifecycle methods** that run at specific times during a component’s life:

* **`componentDidMount`** runs **once** after the component is first added (mounted) to the page.
  Example use: Fetch data right after the component shows up.

* **`componentDidUpdate`** runs **every time** the component updates (re-renders) because its state or props changed.
  Example use: React to changes, like fetching new data when a prop changes.

---

### What does **"replace"** mean here?

With **functional components** and **Hooks**, React introduced `useEffect` as a way to **do all those lifecycle jobs** inside one Hook instead of separate methods.

So:

* When you want to do something **once after mounting**, you use `useEffect` with an **empty dependency array (`[]`)** — this works like `componentDidMount`.

* When you want to do something **after every update** or **when certain values change**, you use `useEffect` with dependencies — this works like `componentDidUpdate`.

---

### Example comparison:

**Class component example:**

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    // Runs once after mount
    console.log("Component mounted");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      // Runs when userId prop changes
      console.log("userId changed, fetch new data");
    }
  }

  render() {
    return <div>Hello</div>;
  }
}
```

---

**Functional component with `useEffect`:**

```jsx
import React, { useEffect } from 'react';

function MyComponent({ userId }) {
  // Run once on mount
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // Run when userId changes
  useEffect(() => {
    console.log("userId changed, fetch new data");
  }, [userId]);

  return <div>Hello</div>;
}
```

---

### So in short:

> **`useEffect` replaces the need for many lifecycle methods by letting you run code after render for different cases (mounting, updating) all inside a function component.**

---

## 3️What is a Side Effect?

Actions that happen **outside React’s rendering** or rely on external systems, such as:

| Side Effect Type        | Example                          |
| ----------------------- | -------------------------------- |
| Data fetching           | Load user info from an API       |
| Timers                  | Set intervals or timeouts        |
| Local storage           | Save user preferences            |
| Event listeners         | Keypress or mouse event handlers |
| WebSocket subscriptions | Live chat updates                |

---

## useEffect has two phases
4️Mounting & Unmounting  

* **Mount:** Component appears on screen
* **Unmount:** Component is removed from screen

---


## Mounting & Unmounting 

### 1. Mounting (Component appears)

* When a component **mounts**, it means it **first renders** and shows up on the screen.
* `useEffect` runs **after** the first render.
* Typical purpose at mount:

  * Fetch data to display
  * Set up event listeners or subscriptions
  * Initialize timers or animations

**Example:**

```jsx
useEffect(() => {
  console.log("Component mounted — fetch data or set things up");

  // You might fetch data here to display in the component

}, []); // Empty dependency = run only on mount
```

---

### 2. Updating (Component re-renders)

* When the component’s **state or props change**, React re-renders it.
* `useEffect` with dependencies runs **after each render** where the dependencies change.
* Purpose during update:

  * Fetch new data when a prop or state changes
  * Respond to changes (e.g., update title or animations)

**Example:**

```jsx
useEffect(() => {
  console.log(`User ID changed — fetch new user profile for ${userId}`);

  // fetch user profile for the new userId

}, [userId]); // Run when userId changes
```

---

### 3. Unmounting (Component disappears)

* When the component is **removed from the UI**, it **unmounts**.
* React runs the **cleanup function** returned by `useEffect` (if any) right before unmount.
* Purpose of cleanup:

  * Stop timers
  * Remove event listeners
  * Cancel subscriptions or fetches
  * Reset or clear resources to avoid memory leaks or errors

**Example:**

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => {
    clearInterval(timer); // Stop the timer on unmount
    console.log("Component unmounted — timer cleared");
  };
}, []);
```

---

#

---

## Example: Fetching on Mount, Cleanup on Unmount

### **UserProfile.jsx**

```jsx
import React, { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); 
    const signal = controller.signal;

    const fetchUser = async () => {
      try {
        console.log('Fetching user:', userId);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted (component unmounted)');
        } else {
          console.error('Fetch failed:', error);
        }
      }
    };

    fetchUser();

    return () => {
      // This runs on UNMOUNT or before next fetch if userId changes
      controller.abort(); // Cancel the fetch request
      console.log('Cleanup — user fetch canceled');
    };
  }, [userId]); // Runs again if userId changes

  if (!user) return <p>Loading user data...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
}

export default UserProfile;
```

---

##  Example usage in App (to trigger unmount)

```jsx
import React, { useState } from 'react';
import UserProfile from './UserProfile';

function App() {
  const [showProfile, setShowProfile] = useState(true);
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <button onClick={() => setShowProfile(prev => !prev)}>
        {showProfile ? 'Hide' : 'Show'} Profile
      </button>

      <button onClick={() => setUserId(id => id + 1)}>
        Next User
      </button>

      {showProfile && <UserProfile userId={userId} />}
    </div>
  );
}

export default App;
```

---

### Behavior Breakdown

* **Mount:**

  * When `UserProfile` is shown (first render or `userId` changes), `useEffect` runs and fetches data.
* **Unmount:**

  * When the user hides the profile (`setShowProfile(false)`), React removes the component and triggers the `return () => {...}` cleanup function — aborts the fetch.
* **Dependency Update:**

  * When `userId` changes, cleanup runs first (cancels old fetch), then a new fetch starts.

---

### Real-world Use Case:

* You avoid memory leaks when user **navigates away before the fetch completes**.
* You ensure only **latest request is valid**, older ones get canceled.

---

### Your understanding:

* **Mount** = `useEffect` runs **after the component renders first time**, e.g., fetch/display data or setup things.
* **Unmount** = cleanup function runs to **stop or remove ongoing stuff** (timers, listeners) because the component is going away.

## 5️ How to Use `useEffect`

```jsx
useEffect(() => {
  // Side effect code here
}, [dependencies]);
```

* `dependencies` array controls **when** the effect runs

---

## 6️ `useEffect` with Empty Dependency Array `[]`

### Runs **once** after the component mounts.

```jsx
useEffect(() => {
  console.log('Component mounted');
  
  return () => {
    console.log('Component unmounted');
  };
}, []);
```

### Real-World Example: Fetch products once on page load

```jsx
useEffect(() => {
  fetch('/api/products')
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);
```

---

## 7️ `useEffect` with Dependency `[variable]`

### Runs on mount **and** whenever `variable` changes.

```jsx
useEffect(() => {
  console.log(`Variable changed: ${variable}`);

  return () => {
    console.log('Cleanup before next run or unmount');
  };
}, [variable]);
```

### Real-World Example: Fetch user data when `userId` changes

```jsx
useEffect(() => {
  fetch(`/api/user/${userId}`)
    .then(res => res.json())
    .then(data => setUser(data));

  return () => {
    console.log('Cleaning up before fetching new user');
  };
}, [userId]);
```

---

## 8️ `useEffect` Without Dependency Array

### Runs **after every render** (mount + updates).

```jsx
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

```


---

## 9️Cleanup Function

* Returned function inside `useEffect` runs on **unmount** or before effect re-runs.
* Use it to clean timers, subscriptions, or event listeners.

Example:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick...');
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log('Timer cleared');
  };
}, []);
```

---

##  Full Example: User Profile Fetch with Cleanup

```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // Create a controller
    setUser(null); // Clear previous user while loading

    axios.get(`https://api.example.com/user/${userId}`, {
      signal: controller.signal, // Pass the signal to axios
    })
      .then(res => setUser(res.data))
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log('Request canceled:', err.message);
        } else {
          console.error('Fetch error:', err);
        }
      });

    return () => {
      controller.abort(); // 👈 This is the real cleanup
      console.log('Cleanup: Aborting previous request');
    };
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return <div>Hello, {user.name}</div>;
}

```

---

# Summary Table

| Syntax                       | When It Runs                  | Use Case Example                      |
| ---------------------------- | ----------------------------- | ------------------------------------- |
| `useEffect(() => {}, [])`    | Once on mount                 | Fetch data once when component loads  |
| `useEffect(() => {}, [var])` | On mount + when `var` changes | Fetch data when a variable changes    |
| `useEffect(() => {})`        | After every render            | Update document title on every render |

