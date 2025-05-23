

##  🚀 JavaScript: Promises, Callbacks, and Async/Await (Beginner Notes)

## 📌 Topics Covered:
- [What is a Promise?](#what-is-a-promise)
- [What is a Callback?](#what-is-a-callback)
- [How to Use the Promise Constructor](#how-to-use-the-promise-constructor)
- [Using Fetch API](#using-fetch-api)
- [Async & Await](#async--await)
- [Practice Exercises](#practice-exercises)

---

## 🧠 What is a Promise?

A **promise** is like making a commitment to do something **in the future**.

> 💬 Example: "I promise to bring you food in 2 minutes. If I succeed, I’ll give you food. If I fail, I’ll give you an error."

### ✅ Promises Have 3 States:
1. `pending` – still waiting (not done yet)
2. `fulfilled` – success!
3. `rejected` – failed 😞

### 🤓 Why Use Promises?
Because JavaScript is **asynchronous**, it can’t wait around for tasks (like fetching data from the internet). Promises help us manage these tasks in a clean, readable way.

---

## 🪝 What is a Callback?

A **callback** is a function that gets passed into another function to run **later**.

```js
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(null, skills)
  }, 2000)
}

doSomething((error, result) => {
  if (error) {
    console.log("There was an error:", error)
  } else {
    console.log("Skills:", result)
  }
})
```

### 😵 Callback Hell
When callbacks are nested inside other callbacks, the code becomes hard to read. This is where **promises** come in to clean things up.

---

## 🔨 How to Use the Promise Constructor

```js
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject("No skills found!")
    }
  }, 2000)
})
```

- `resolve()` is called when things go right ✅
- `reject()` is called when something goes wrong ❌

### Handling the Promise

```js
doPromise
  .then(result => {
    console.log("Success:", result)
  })
  .catch(error => {
    console.log("Error:", error)
  })
```

---

## 🌐 Fetch API (Get Data from the Internet)

You can use `fetch()` to grab data from a website or API.

```js
const url = 'https://restcountries.com/v2/all'

fetch(url)
  .then(response => response.json()) // Convert response to JSON
  .then(data => {
    console.log(data) // Do something with the data
  })
  .catch(error => console.error("Fetch error:", error))
```

---

## 🧘 Async & Await

`async` and `await` make working with Promises easier and cleaner.

```js
const fetchData = async () => {
  try {
    const response = await fetch('https://restcountries.com/v2/all')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error("Error:", error)
  }
}

fetchData()
```

- `async` makes a function return a **promise**
- `await` pauses the function until the promise finishes

> ❗ You can only use `await` inside an `async` function.

---

## 🧠 Practice Exercises

```js
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
```

### ✅ Level 1
1. Use fetch to print **name**, **capital**, **languages**, **population**, and **area** of each country.

### ✅ Level 2
1. Print out **all the cat names** from the cat API.

### ✅ Level 3
1. Find the **average weight** of cats (in metric).
2. Find the **10 largest countries** by area.
3. Count the **total number of unique languages** spoken officially.

---

## 🔁 Summary

| Concept         | What it does                        |
|-----------------|-------------------------------------|
| `Promise`       | Handles async operations            |
| `then()`        | Runs when the promise is successful |
| `catch()`       | Runs when the promise fails         |
| `async/await`   | Cleaner way to work with promises   |
| `fetch()`       | Gets data from an API               |

---

🧠 **Tip:** Always use `.catch()` or `try/catch` to handle errors. It's like wrapping your code in a helmet.

