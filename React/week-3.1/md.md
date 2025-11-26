

# 🌟 **Week 4: Event Handling & Form Management in React**

**Instructor:** Fitsum
**Date:** 17/03

---

## 🎯 **Learning Goals (What students should master)**

By the end of this week, students should be able to:

* Handle **user events** like clicks, typing, and form submission.
* Understand **React’s Synthetic Event System** and how event bubbling works.
* Build **controlled components** using `value` + `onChange`.
* Manage **multiple form inputs** using state.
* Implement basic **form validation**.
* Build real-world forms: **login, signup, search**.
* Connect form input to **application logic** (e.g., authentication, filtering).

---

# 🔥 **1. Event Handling in React**

React uses something called the **synthetic event system**, which is basically React’s “wrapper” around native browser events.
Think of it like React saying:

> “Bro I know DOM events are messy across different browsers, so I’ll handle it for you.”

### 🧠 Analogy

**Synthetic events are like wearing a universal charging adapter:**
No matter the socket (the browser), the adapter (React) makes sure everything works consistently.

---

## 📌 **Basic Event Example**

### 👉 Click Event

```jsx
function ButtonExample() {
  const handleClick = () => {
    alert("Clicked! 🚀");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

### 👉 Input Event

```jsx
function InputExample() {
  const handleInput = (e) => {
    console.log("Typed:", e.target.value);
  };

  return <input type="text" onChange={handleInput} />;
}
```

---

# 🌊 **2. Event Bubbling (React’s Behavior)**

Event bubbling means:
An event first triggers on the **child**, then moves up to its **parent**, and so on.

### Tiny Example:

```jsx
<div onClick={() => console.log("Parent clicked")}>
  <button onClick={() => console.log("Button clicked")}>
    Click
  </button>
</div>
```

💡 When you click the button, console prints:

1. Button clicked
2. Parent clicked

### 🎮 Real-Life Analogy

Imagine you tap a kid (child element).
The kid reacts first.
Then the parent notices.
Then maybe the grandparent reacts too.

Same logic.

---

# 📝 **3. Controlled Components (React Standard Form Pattern)**

A **controlled component** means:

* The input’s value is stored in **React state**,
* and the input updates only via state changes.

React basically says:

> “Don’t let the browser control the value. I want full control.”

### 🎯 Example: Controlled Input

```jsx
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
```

---

# 🧩 **4. Multiple Inputs Handling**

Instead of writing multiple `useState`, you combine them into one object.

### ✔ Example (Best Practice)

```jsx
function MultiForm() {
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <input name="username" value={form.username} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <input name="password" value={form.password} onChange={handleChange} />
    </form>
  );
}
```

### 🧠 Analogy

Managing multiple inputs with a single `setForm` is like managing a **WhatsApp group** instead of texting each friend separately.

---

# 🚨 **5. Basic Form Validation**

### Simple Example (required fields)

```jsx
function SignupForm() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Bruh, that email ain't valid 😭");
      return;
    }

    setError("");
    console.log("Form Submitted:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email"
      />
      {error && <p style={{color: "red"}}>{error}</p>}
      <button>Submit</button>
    </form>
  );
}
```

---

# 🌍 **6. Real-World Use Cases**

### ✔ Login Form

* Validate email + password
* Submit to backend
* Store token in local storage

### ✔ Signup Form

* Validate fields
* Password match check

### ✔ Search Bar

* Filter products dynamically
* Autocomplete suggestions

### ✔ Contact Form

* Handle message sending
* Basic validation

### ✔ Dashboard Filters

* Change UI based on user input

---

# 🧪 **7. Real-World Scenario**

### 🛒 Scenario: E-Commerce Search

User types into search box → React state updates → you filter products in real-time.

```jsx
function SearchProducts({ products }) {
  const [query, setQuery] = React.useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input 
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </div>
  );
}
```

---

# 😆 **8. Fun Facts**

✨ React events are actually objects from its internal **SyntheticEvent class**, not the native DOM event.

✨ React automatically pools events for performance — meaning sometimes event values “disappear” if used asynchronously (common beginner bug).

✨ Handling forms is one of the main skills companies expect from junior devs.

✨ 75% of most web apps involve some form of “Enter Info → Process Info”.

---

# 🎯 **9. Practice Questions**

### 🔹 **Concept Questions**

1. What is a controlled component?
2. Why does React use synthetic events instead of native events?
3. What is event bubbling? Provide an example.
4. Why does form submission require `e.preventDefault()` in React?

### 🔹 **Coding Tasks**

1. Build a **login form** with email + password validation.
2. Build a **real-time search bar** that filters a list of names.
3. Create a form with 3 inputs using **one state object**.
4. Add validation that checks password length ≥ 6 characters.
5. Create a signup form that prints data as JSON on submit.

