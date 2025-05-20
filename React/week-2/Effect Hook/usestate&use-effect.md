

##  Difference Between `useState` and `useEffect`

| Feature              | `useState`                                                                               | `useEffect`                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Purpose**          | To **store and manage data/state** inside a component.                                   | To **perform side effects** after rendering (like fetching data, timers, subscriptions).            |
| **When it runs**     | Runs immediately when you update the state using the setter function (e.g., `setCount`). | Runs **after** the component renders or re-renders, based on dependencies.                          |
| **What it controls** | Controls **what appears on the screen** by holding values that affect rendering.         | Controls **actions that happen outside rendering**, such as API calls, event listeners, or logging. |
| **Triggers**         | Triggered manually by calling the state setter (like on button click).                   | Triggered automatically by React after render or when dependencies change.                          |
| **Example use**      | Track a counter, form input, toggle switch.                                              | Fetch user data when component mounts or a value changes; set timers or subscriptions.              |

---

### Simple Analogy:

* **`useState`** is like your **component’s memory** — it remembers things (like the current count or input value).
* **`useEffect`** is like a **messenger** that does tasks **after** the component has updated — like fetching data or logging info.

---

### Quick Example:

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0); // useState: store count

  useEffect(() => {
    console.log(`Count changed to ${count}`); // useEffect: side effect after render
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

* **`useState`** manages the count value.
* **`useEffect`** logs to the console whenever the count changes.
