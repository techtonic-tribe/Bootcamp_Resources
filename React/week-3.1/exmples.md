## 1 Event Handling

```

import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);
  const [name, setName] = useState("");
  const [logs, setLogs] = useState([]);

  const handleButtonClick = () => {
    setClicks((count) => count + 1);
    setLogs((entries) => [
      `Button clicked (${new Date().toLocaleTimeString()})`,
      ...entries,
    ]);
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
    setLogs((entries) => [
      `Typing: ${event.target.value}`,
      ...entries,
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLogs((entries) => [`Form submitted with name: ${name}`, ...entries]);
  };

  return (
    <main className="event-demo">
      <h1>Event Handling Demo</h1>

      <button type="button" onClick={handleButtonClick}>
        Tap me ({clicks})
      </button>

      <form onSubmit={handleSubmit}>
        <label>
          Your name
          <input
            value={name}
            onChange={handleInputChange}
            placeholder="Start typing..."
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <section>
        <h2>Event log</h2>
        <ul>
          {logs.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;

```


## 2 Synthetic Event System

```
import { useState } from "react";

const formatSnapshot = (snapshot) => JSON.stringify(snapshot, null, 2);
const buildSnapshot = (event) => ({
  syntheticType: event.type,
  nativeType: event.nativeEvent.type,
  target: event.currentTarget.tagName,
});

function App() {
  const [logs, setLogs] = useState([]);
  const [message, setMessage] = useState("");

  const pushLog = (label, snapshot) => {
    setLogs((prev) => [
      {
        label,
        snapshot,
      },
      ...prev,
    ]);
  };

  const handleClick = (event) => {
    const snapshot = buildSnapshot(event);
    setTimeout(() => {
      pushLog("Async snapshot after timeout", snapshot);
    }, 300);
  };

  const handleInput = (event) => {
    setMessage(event.target.value);
    pushLog("Input change", buildSnapshot(event));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLog("Form submit", buildSnapshot(event));
  };

  return (
    <main className="synthetic-event-demo">
      <h1>React Synthetic Events</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Message
          <input
            value={message}
            onChange={handleInput}
            placeholder="Type something"
          />
        </label>

        <button type="submit">Submit form</button>
      </form>

      <button type="button" onClick={handleClick}>
        Inspect click event
      </button>

      <section>
        <h2>Event snapshots</h2>
        <p>Each entry shows the synthetic wrapper and its native event data.</p>
        <ul>
          {logs.map(({ label, snapshot }, index) => (
            <li key={`${label}-${index}`}>
              <strong>{label}</strong>
              <pre>{formatSnapshot(snapshot)}</pre>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;


```
## 3 Event Bubbling
```
function App() {
  const handleParentClick = () => {
    console.log("Parent handler: bubbling reached container");
  };

  const handleChildClick = (event) => {
    console.log("Child handler: button was clicked");
    // Uncomment next line to stop bubbling:
    // event.stopPropagation();
  };

  return (
    <section
      onClick={handleParentClick}
      style={{ border: "2px solid #333", padding: "1rem", width: "fit-content" }}
    >
      <p>Click the button and watch both logs due to bubbling.</p>
      <button type="button" onClick={handleChildClick}>
        Tap child button
      </button>
    </section>
  );
}

export default App;


```
## 4 Controlled Components

```
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


```

## 5 Managing Multiple Inputs

```
import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${JSON.stringify(form, null, 2)}`);
  };

  return (
    <main className="form-demo">
      <h1>Profile Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="jane_doe"
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
          />
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
          />
        </label>

        <button type="submit">Save changes</button>
      </form>

      <section className="preview">
        <h2>Live Preview</h2>
        <ul>
          <li>Username: {form.username || "—"}</li>
          <li>Email: {form.email || "—"}</li>
          <li>Password: {form.password ? "••••••••" : "—"}</li>
        </ul>
      </section>
    </main>
  );
}

export default App;

```

## 6 Form Validation

```
import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    username: false,
  });

  const validateField = (name, value) => {
    switch (name) {
      case "username":
        return value.trim() ? "" : "Username is required.";
      case "email":
        return value.includes("@") ? "" : "Email must include @.";
      case "password":
        return value.length >= 6 ? "" : "Password must be at least 6 characters.";
      default:
        return "";
    }
  };

  const validateAll = (nextForm) => ({
    username: validateField("username", nextForm.username),
    email: validateField("email", nextForm.email),
    password: validateField("password", nextForm.password),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => {
      const nextForm = { ...prevForm, [name]: value };
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, value),
      }));
      return nextForm;
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateAll(form);
    setErrors(nextErrors);
    setTouched({
      username: true,
      email: true,
      password: true,
    });

    const hasErrors = Object.values(nextErrors).some((message) => message);
    if (hasErrors) {
      return;
    }

    alert(`Submitted: ${JSON.stringify(form, null, 2)}`);
  };

  return (
    <main className="form-demo">
      <h1>Profile Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="jane_doe"
          />
          {touched.username && errors.username && (
            <p className="error-text">{errors.username}</p>
          )}
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="jane@example.com"
          />
          {touched.email && errors.email && (
            <p className="error-text">{errors.email}</p>
          )}
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="••••••••"
          />
          {touched.password && errors.password && (
            <p className="error-text">{errors.password}</p>
          )}
        </label>

        <button type="submit">Save changes</button>
      </form>

      <section className="preview">
        <h2>Live Preview</h2>
        <ul>
          <li>Username: {form.username || "—"}</li>
          <li>Email: {form.email || "—"}</li>
          <li>Password: {form.password ? "••••••••" : "—"}</li>
        </ul>
      </section>
    </main>
  );
}

export default App;

```

## 7 Connecting Form Input to Application Logic

```
import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    username: false,
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [user, setUser] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case "username":
        return value.trim() ? "" : "Username is required.";
      case "email":
        return value.includes("@") ? "" : "Email must include @.";
      case "password":
        return value.length >= 6 ? "" : "Password must be at least 6 characters.";
      default:
        return "";
    }
  };

  const validateAll = (nextForm) => ({
    username: validateField("username", nextForm.username),
    email: validateField("email", nextForm.email),
    password: validateField("password", nextForm.password),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => {
      const nextForm = { ...prevForm, [name]: value };
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, value),
      }));
      return nextForm;
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const login = ({ email, password }) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.endsWith("@gmail.com") && password === "supersecret") {
          const sessionId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
          resolve({ id: sessionId, email });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 800);
    });

    

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateAll(form);
    setErrors(nextErrors);
    setTouched({
      username: true,
      email: true,
      password: true,
    });

    const hasErrors = Object.values(nextErrors).some((message) => message);
    if (hasErrors) {
      return;
    }

    setStatus({ state: "loading", message: "Signing you in..." });

    try {
      const profile = await login(form);
      setUser({ username: form.username, email: profile.email });
      setStatus({ state: "success", message: "Redirecting to dashboard..." });
    } catch (error) {
      setUser(null);
      setStatus({ state: "error", message: error.message });
    }
  };

  return (
    <main className="form-demo">
      <h1>Profile Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="jane_doe"
          />
          {touched.username && errors.username && (
            <p className="error-text">{errors.username}</p>
          )}
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="jane@example.com"
          />
          {touched.email && errors.email && (
            <p className="error-text">{errors.email}</p>
          )}
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="••••••••"
          />
          {touched.password && errors.password && (
            <p className="error-text">{errors.password}</p>
          )}
        </label>

        <button type="submit" disabled={status.state === "loading"}>
          {status.state === "loading" ? "Submitting..." : "Save changes"}
        </button>
      </form>

      <section className="preview">
        <h2>Live Preview</h2>
        <ul>
          <li>Username: {form.username || "—"}</li>
          <li>Email: {form.email || "—"}</li>
          <li>Password: {form.password ? "••••••••" : "—"}</li>
        </ul>
      </section>

      <section className="status-panel">
        <h2>Login Status</h2>
        {status.state !== "idle" && <p data-status={status.state}>{status.message}</p>}
        {user && (
          <div className="session-card">
            <p>Signed in as {user.username}</p>
            <p>Session email: {user.email}</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;



```