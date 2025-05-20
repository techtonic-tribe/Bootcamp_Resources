

## 🚀 `useEffect` Advanced Lecture Notes (Expanded)

---

### 🧠 What is `useEffect`?

#### 🔍 Conceptual Understanding

In React, every function component is essentially a *render function*. It renders the UI based on props and state, and it’s supposed to be **pure** — meaning, it should not produce side effects like:

* Fetching data from a server
* Directly interacting with the DOM
* Starting a timer or subscription
* Logging, analytics, localStorage mutations, etc.

React’s `useEffect` is the *escape hatch* that lets you do these “impure” operations—**after** rendering is done.

#### 📘 Definition:

```js
useEffect(callback, dependencyArray)
```

React executes the `callback` *after* the component renders and commits to the DOM.

---

#### 💡 Real-World Analogy

Think of `useEffect` like a *to-do list* that you hand to React. You say:

> “After you’ve finished drawing this component on the screen, do this thing for me—like fetching the latest news or syncing something to the server.”

---

#### 🧠 Why is it needed?

Before Hooks, class components had lifecycle methods:

* `componentDidMount`: called once after the component appears
* `componentDidUpdate`: called whenever the component updates
* `componentWillUnmount`: clean up before the component disappears

Hooks unify all three into a **single API**: `useEffect`.

It lets us:

* Avoid duplication
* Encapsulate behavior (think: custom hooks)
* Write smaller, composable logic blocks

---

### ✅ Common useEffect Use Cases

| Purpose            | Real-world example                                      |
| ------------------ | ------------------------------------------------------- |
| Data Fetching      | Load posts from an API after the component mounts       |
| Subscriptions      | Open a WebSocket connection when the component loads    |
| DOM Manipulation   | Set focus on a text input field                         |
| Timers & Intervals | Set a timer to update a counter every second            |
| Cleanup            | Unsubscribe from listeners or cancel fetches on unmount |

---

### 🔄 Lifecycle Execution Order (Expanded)

Understanding **when** `useEffect` runs is crucial.

#### ⏱ Render Phase

1. React calls your component function
2. The JSX is evaluated
3. The virtual DOM is diffed
4. React paints the changes to the screen

✅ Only **after all that**, React runs your `useEffect`.

```plaintext
Render ➡️ Commit ➡️ useEffect()
```

This means `useEffect` **cannot block rendering**. That’s intentional—**your UI always renders first**.

---

#### ⚙ Dependency Array Rules

| Dependency Array   | Behavior                             | When to Use                             |
| ------------------ | ------------------------------------ | --------------------------------------- |
| `[]` (empty array) | Runs only once (on mount)            | For initial fetch, 1-time setup         |
| `[state, props]`   | Runs on mount and when values change | Watch specific values                   |
| No array           | Runs after **every** render          | Rarely useful (often a performance bug) |

---

#### 💥 Example: Dependency Behavior

```jsx
useEffect(() => {
  console.log('Effect ran!');
}, []); // runs once

useEffect(() => {
  console.log('Runs when count changes');
}, [count]); // runs on mount + when `count` changes

useEffect(() => {
  console.log('Runs after every render');
}); // runs always
```

---

### 🧠 Key Insight:

> The dependency array is like a *watchlist*. React will compare the values in this array from the last render to the current one, and only re-run the effect if at least one of them changed via shallow comparison.

---

### 🧨 What if you don’t understand this?

You’ll:

* Trigger infinite loops
* Re-fetch unnecessarily
* Miss important updates
* Fail to clean up resources → memory leaks

---


### 🧪 Basic Logging Example

```jsx
import { useEffect } from 'react';

function LoggerComponent({ count }) {
  console.log('Rendering...');

  useEffect(() => {
    console.log('useEffect called!');
  }, [count]);

  return <div>Count: {count}</div>;
}
```

---

## 📡 Data Fetching with useEffect

### ✅ Basic Fetch
```jsx
useEffect(() => {
  fetch('/api/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
}, []);
```

### 🔁 With Async/Await (IIFE)
```jsx
useEffect(() => {
  (async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    setPosts(data);
  })();
}, []);
```

### ⚠️ Error Handling
```jsx
useEffect(() => {
  (async () => {
    try {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err);
    }
  })();
}, []);
```

---

## 🧠 Common Pitfalls

### ❌ Wrong Dependency Array
```jsx
useEffect(() => {
  doSomething();
}, [someFunction()]); // bad! this will always re-run
```

### ⚠️ Inline Functions in Dependencies
- Functions are recreated every render → triggers effect

Use `useCallback` if needed:
```jsx
const memoizedFn = useCallback(() => doSomething(), []);
useEffect(() => {
  memoizedFn();
}, [memoizedFn]);
```

### 🔁 Interval Side Effects
```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log('Tick');
  }, 1000);
  return () => clearInterval(id);
}, []);
```

---

## ♻️ Custom Hook: useFetch

```jsx
import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
```

### ✅ Usage
```jsx
function Posts() {
  const { data, loading, error } = useFetch('/api/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

---

## 🧠 When NOT to use useEffect

### ❌ Deriving state from props
```jsx
const [localVal, setLocalVal] = useState(props.val);
useEffect(() => setLocalVal(props.val), [props.val]);
```
Instead, derive directly in render:
```jsx
const derived = props.val * 2;
```

### ❌ Triggering effects conditionally
```jsx
if (condition) useEffect(...); // illegal
```
Hooks must always run in the same order.

---

## 🔁 Related Hooks

### `useLayoutEffect`
Runs *before* the browser paints the screen (used for layout-related reads/writes).

### `useMemo`
Memoizes a value based on dependencies (not for effects).

### `useCallback`
Memoizes a function.

---

## 🧪 Challenge
1. Refactor a component with multiple fetch calls into reusable hooks.
2. Create a `useDebouncedEffect` custom hook.
3. Discuss: Should we use React Query instead of custom fetch logic?

---


## 🧪 Exercise 1: Basic useEffect Behavior

**❓ What will this component log to the console when it first renders?**

```jsx
import React, { useState, useEffect } from 'react';

function HelloWorld() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect called');
  });

  console.log('rendering...');

  return <button onClick={() => setCount(count + 1)}>Click Me</button>;
}
```

### ✅ Answer:

On the **initial render**, this will log:

```
rendering...
useEffect called
```

* `console.log('rendering...')` runs **during** render phase.
* `useEffect` runs **after** the component mounts and the DOM is painted.

If you click the button, it will log both again — because `useEffect` has **no dependency array**, it runs after **every render**.

---

## 🧪 Exercise 2: Dependency Control

**❓ How many times does the `useEffect` below run if the user clicks the button 5 times?**

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran');
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

### ✅ Answer:

* `useEffect` runs **on initial mount** (when `count` is `0`)
* Then it runs **every time `count` changes**

👆 So if you click the button 5 times, `useEffect` runs a total of **6 times** (1 initial + 5 updates).

---

## 🧪 Exercise 3: Static vs Dynamic Dependencies

**❓ What will this log if the `name` prop doesn’t change, but the button is clicked multiple times?**

```jsx
function Greet({ name }) {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log(`Hello, ${name}`);
  }, [name]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        Clicked {clicks} times
      </button>
    </div>
  );
}
```

### ✅ Answer:

If the `name` prop never changes:

* `useEffect` runs **only once** on mount.
* Clicking the button changes state, causes re-renders, but `name` remains unchanged → effect does **not run again**.

✅ So you'll see:

```
Hello, [name]
```

→ **logged once**, even if the button is clicked multiple times.

---

## 🧩 Closing Thoughts
- `useEffect` is powerful but easy to misuse.
- Avoid cramming too much logic inside effects.
- Break effects into smaller, single-purpose blocks.
- Prefer **event-driven** or **derived state** when possible.

---

## 📘 Recommended Reading
- [Dan Abramov – A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
- [React Docs – useEffect](https://react.dev/reference/react/useEffect)
- [React Query](https://tanstack.com/query/latest) – an alternative to manual fetching
