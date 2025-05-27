
---

# 📘 React Routing (Basics)

## 🔰 What is Routing?

**Routing** in React is how we make different components show up based on the URL.

In traditional websites, navigating between pages reloads the whole page.
But in **React (a Single Page Application)**, routing changes the **view** without reloading the page. This makes the app faster and smoother.

---

## 🧰 What Do We Use for Routing?

We use a library called **React Router**.

Install it using:

```bash
npm install react-router-dom
```

---

## 📌 Basic Routing Setup

### 1. **App Structure**

Suppose we have three pages: Home, About, and Contact.

We create three components:

```jsx
// Home.jsx
export default function Home() {
  return <h1>Home Page</h1>;
}

// About.jsx
export default function About() {
  return <h1>About Page</h1>;
}

// Contact.jsx
export default function Contact() {
  return <h1>Contact Page</h1>;
}
```

---

### 2. **Set Up Routing in App.jsx**

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

📝 **Explanation:**

* `<BrowserRouter>`: Wraps the whole app and enables routing.
* `<Routes>`: Container for all route definitions.
* `<Route path="..." element={<Component />} />`: Defines a route.

---

## 🧭 Navigation Between Pages

Use the `<Link>` component instead of `<a>` to change pages **without reloading**.

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```

Then include `<Navbar />` in your `App.jsx` above `<Routes>`.

---

## 🔍 URL Parameters

Sometimes, you want to load dynamic pages — like a profile page based on user ID.

```jsx
// User.jsx
import { useParams } from 'react-router-dom';

export default function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}
```

In `App.jsx`:

```jsx
<Route path="/user/:id" element={<User />} />
```

📝 Now if you go to `/user/42`, it will show: `User ID: 42`.

---

## ✅ Summary of Key Concepts

| Concept         | Purpose                                               |
| --------------- | ----------------------------------------------------- |
| `BrowserRouter` | Wraps the app to enable routing                       |
| `Routes`        | Groups all route definitions                          |
| `Route`         | Defines a URL path and its component                  |
| `Link`          | Navigate between pages without reloading              |
| `useParams()`   | Get dynamic values from the URL like IDs or usernames |

---

## 💡 Real Life Analogy

Think of your app as a hotel.
Each route (`/`, `/about`, `/user/1`) is like a **room number**.
React Router is like a **receptionist** who gives you the correct room (component) based on your request (URL), **without you leaving the hotel (app)**.

---

## 🧪 Example Route Table

| URL        | Component Rendered |
| ---------- | ------------------ |
| `/`        | Home               |
| `/about`   | About              |
| `/contact` | Contact            |
| `/user/42` | User with ID: 42   |

---

## ✅ Next Concepts (Not Covered Here)

Once you're confident with the basics, you can explore:

* Nested routes
* Redirects and protected routes
* Lazy loading
* Layouts

---

