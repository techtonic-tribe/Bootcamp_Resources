# 🔥 **React Intermediate Guide: State & Events (with In-Depth Examples)**

## 🧠 **Target Audience**

This guide is for learners who already know:

* JSX
* Functional components
* Component rendering & basic props

It **does not** cover absolute beginner material.

---

## 🧩 PART 1: **What is State?**

### 🔍 Definition

**State** refers to data that a component **controls and can change over time**. When state updates, React **re-renders** the component to reflect those changes in the UI.

```js
const [count, setCount] = useState(0); // 'count' is the state
```

Think of **state** like **memory** for components. It’s how components "remember" things — like user input or whether a dropdown is open.

---

### ⚔️ Props vs State

| Feature        | Props                  | State                     |
| -------------- | ---------------------- | ------------------------- |
| Source         | Parent component       | Internal to the component |
| Mutable?       | ❌ Immutable            | ✅ Mutable via `setState`  |
| Responsibility | Controlled externally  | Managed internally        |
| Use Case       | Static, passed-in data | Dynamic, changeable data  |

#### Example:

```js
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>; // 'name' is a prop
}
```

```js
function Counter() {
  const [count, setCount] = useState(0); // 'count' is state
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

### 🧠 When to Use State

Use state for:

✅ Dynamic UI (e.g. toggling dark mode)

✅ User input (e.g. form fields, clicks)

✅ Component-local data (e.g. counters, modals)

---

## ❓ A component with a button to show/hide a message (basic toggle logic)?



### ❌ Anti-Patterns to Avoid

#### ❌ Direct Mutation

```js
count++; // ❌ React won’t detect this change

this.state.count = this.state.count + 1; // Incorrect


```


#### ✅ Correct Way

```js
setCount(prev => prev + 1); // ✅ React tracks this

this.setState({ count: this.state.count + 1 }); // Correct
```

#### ❌ Deriving state from props unnecessarily

This makes your component logic complex and brittle. Instead, lift the state up or calculate during render.

---

## ⚙️ PART 2: **Using the `useState` Hook**

### ✍️ Syntax

```js
const [value, setValue] = useState(initialValue);
```

Example:

```js
const [username, setUsername] = useState("fitse");
```

---

### ⏱️ State Updates are Async!

React **batches state updates** for performance. So don’t rely on immediate changes:

```js
setCount(count + 1);
console.log(count); // Will log the *old* value!
```

Use a functional update when your new state depends on the old state:

```js
setCount(prev => prev + 1);
```

---

### 📦 Multiple States in One Component

You can have **as many `useState` calls as needed**:

```js
const [name, setName] = useState('');
const [age, setAge] = useState(18);
```

These states are **independent**.

# ----- 1. counter.jsx example -----

---

### 🔧 Complex State: Objects and Arrays

#### 🧠 Why Spread Syntax?

State must be **replaced**, not mutated. Use the spread operator to copy.

#### ✅ Updating an Object

```js
const [form, setForm] = useState({ name: '', email: '' });

function handleChange(e) {
  setForm(prevForm => ({
    ...prevForm,
    [e.target.name]: e.target.value,
  }));
}
```

#### ✅ Updating an Array

```js
const [todos, setTodos] = useState([]);

function addTodo(newTodo) {
  setTodos(prev => [...prev, newTodo]);
}

function removeTodo(index) {
  setTodos(prev => prev.filter((_, i) => i !== index));
}
```


---

## 🔡 PART 3: **Controlled vs Uncontrolled Inputs**

### 📌 Controlled Inputs

React is the **source of truth**.

```js
const [email, setEmail] = useState('');

<input value={email} onChange={e => setEmail(e.target.value)} />
```

### ⚠️ Uncontrolled Inputs

Let the DOM manage the state (rarely used in React):

```js
<input ref={inputRef} />
```

---

### 📝 Form with Multiple Inputs

Using a single state object:

```js
const [form, setForm] = useState({ name: '', email: '', password: '' });

const handleChange = e => {
  const { name, value } = e.target;
  setForm(prev => ({ ...prev, [name]: value }));
};

<form>
  <input name="name" onChange={handleChange} value={form.name} />
  <input name="email" onChange={handleChange} value={form.email} />
  <input name="password" onChange={handleChange} value={form.password} />
</form>
```

---

### ✅ Basic Validation Example

```js
function handleSubmit(e) {
  e.preventDefault();
  if (!form.email.includes('@')) {
    alert('Invalid email');
  }
}
```
# ------- 2. Form.jsx Example ------

---

## 🎯 PART 4: **Events in React**

### ⚙️ React Event System

React uses **Synthetic Events** – wrappers for native DOM events. This makes them cross-browser consistent.

### 📌 Event Naming

CamelCase: `onClick`, `onSubmit`, `onChange`

---

### 🖱️ Handling Events

```js
function handleClick() {
  alert("You clicked me!");
}

<button onClick={handleClick}>Click me</button>
```

### ❌ Don’t Call the Function Directly

```js
<button onClick={handleClick}>OK</button>   ✅
<button onClick={handleClick()}>OK</button> ❌ (runs immediately)
```

---

### 📦 Passing Arguments to Event Handlers

```js
function handleDelete(id) {
  console.log("Deleting item", id);
}

<button onClick={() => handleDelete(item.id)}>Delete</button>
```

---

### 📑 Accessing Event Object

```js
const handleInput = (e) => {
  console.log(e.target.value); // Logs the input's value
  e.preventDefault(); // Prevents default behavior (useful in forms)
};
```

---
## ❓  Array state: add items to a todo list 


## ⚠️ Common Pitfalls

| Mistake                   | Why It’s Bad                     | Fix                       |
| ------------------------- | -------------------------------- | ------------------------- |
| Mutating state directly   | React won’t detect the change    | Use `setState()`          |
| Forgetting object copies  | Mutates previous state reference | Use spread operator       |
| Calling setState in loops | Infinite re-renders possible     | Use conditions or effects |

---


## 🧠 Summary Table

| Concept            | Core Idea                                   |
| ------------------ | ------------------------------------------- |
| `useState`         | Hook for local state in function components |
| Controlled Input   | UI reflects component state                 |
| Synthetic Events   | Normalized browser events                   |
| Async Updates      | `setState` does not instantly update value  |
| Object/Array State | Copy before updating to avoid mutation      |

---

## 🧪 Suggested Challenges

1. **Form with Live Preview**
2. **Todo App with Add/Delete**
3. **Quiz App with State-based Score**

---

## ❓Deep Questions to Explore

* **When should you use Context or Redux instead of local state?**
* **Why does React batch state updates?**
* **How would you share state between sibling components?**
* **What’s the difference between `useState` and `useReducer`?**

---

# 💡 React Interview Nuggets

### 💬 “Explain how state works in React.”

> State is internal data managed by a component. When updated via `setState` (or `setX` from `useState`), React re-renders the component to reflect the change.

---

### 💬 “Why is direct state mutation bad?”

> Mutating state directly skips React's change detection, so components **won’t re-render**. Always use `setState()` or its hook equivalents to update state immutably.

---

### 💬 “What is a controlled component?”

> A controlled component is a form element whose value is **controlled by React state**. Input changes trigger `onChange`, which updates the state.

```js
<input value={name} onChange={e => setName(e.target.value)} />
```

---

### 💬 “Why are state updates asynchronous?”

> React batches state updates for performance. This means `setState()` doesn't update the value **immediately** — it schedules a re-render.

---

### 💬 “How do you manage multiple form inputs efficiently?”

> Use a **single state object** and handle updates dynamically with input `name` attributes.

```js
const handleChange = e =>
  setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
```

---
