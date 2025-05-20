
### **Challenge 1: useEffect with Dependency Array (`[]`) – Run Once (Mount Only)**

** Goal**: Fetch data only once when the component mounts.

#### 🔹 Task:

Create a component that fetches a random joke from the API below when the component is first rendered, and shows it on the screen.

```url
https://official-joke-api.appspot.com/random_joke
```

####  Requirements:

* Use `useEffect` with `[]`
* Display the joke setup and punchline
* Show "Loading..." while fetching

---

###  **Challenge 2: useEffect Without Dependency Array – Run on Every Render**

** Goal**: Observe that `useEffect` runs every time the component re-renders.

#### 🔹 Task:

Create a counter app. Every time the counter updates, log `"Component rendered"` using `useEffect` (no dependency array).

####  Requirements:

* Use `useState` to create a `count` variable
* Show a button to increase count
* Log message in `useEffect` with no dependency array

---

###  **Challenge 3: useEffect with Dependency – React to State Change**

** Goal**: Fetch a new user when the userId changes.

#### 🔹 Task:

Create a dropdown/select with user IDs (e.g., 1 to 5). When a user selects a different ID, fetch user data from the API:

```url
https://jsonplaceholder.typicode.com/users/{id}
```

####  Requirements:

* Use `useState` to hold the selected `userId` and the user data
* Use `useEffect` with `[userId]` dependency
* Show the user's name and email after fetching
* Show "Loading..." while fetching

---

###  Bonus Tip:

You can ask your students to add a **cleanup function** in Challenges 1 or 3 using `AbortController` to cancel fetches when component unmounts or user changes input.
