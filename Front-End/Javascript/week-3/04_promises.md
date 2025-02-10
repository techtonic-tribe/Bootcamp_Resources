- 
	- [Promise](#promise)
	- [Callbacks](#callbacks)
		- [Promise constructor](#promise-constructor)
	- [Fetch API](#fetch-api)
	- [Async and Await](#async-and-await)
	- [Exercises](#exercises)
		- [Exercises: Level 1](#exercises-level-1)
		- [Exercises: Level 2](#exercises-level-2)
		- [Exercises: Level 3](#exercises-level-3)


## Promise

We human give or receive a promise to do some activity at some point in time. If we keep the promise we make others happy but if we do not keep the promise, it may lead discontentment. Promise in JavaScript has something in common with the above examples.

A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation completed successfully.
- rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

## Callbacks

To understand promise very well let us understand callback first. Let's see the following callbacks. From the following code blocks you will notice, the difference between callback and promises.

- call back
  Let us see a callback function which can take two parameters. The first parameter is err and the second is result. If the err parameter is false, there will not be error other wise it will return an error.

In this case the err has a value and it will return the err block.

```js
//Callback
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback('It did not go well', skills)
  }, 2000)
}

const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}

doSomething(callback)
```

```sh
// after 2 seconds it will print
It did not go well
```

In this case the err is false and it will return the else block which is the result.

```js
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(false, skills)
  }, 2000)
}

doSomething((err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
})
```

```sh
// after 2 seconds it will print the skills
["HTML", "CSS", "JS"]
```

### Promise constructor

We can create a promise using the Promise constructor. We can create a new promise using the key word `new` followed by the word `Promise` and followed by a parenthesis. Inside the parenthesis, it takes a `callback` function. The promise callback function has two parameters which are the _`resolve`_ and _`reject`_ functions.

```js

//syntax
const doPromise = new Promise((resolve, reject) => {
  console.log("Promise function is running...") // This runs immediately 1
  
  setTimeout(() => {
    console.log("Timeout finished, resolving/rejecting promise...") // Runs after 2 sec 3
    
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills) // This triggers `.then()`
    } else {
      reject('Something wrong has happened') // This triggers `.catch()`
    }
  }, 2000)
})

console.log("Before calling .then()") //2

doPromise
  .then(result => {
    console.log("Promise resolved with:", result) //4
  })
  .catch(error => console.log("Promise rejected with:", error))

console.log("After calling .then()") //3
```
The above promise has been settled with resolve.
Let us another example when the promise is settled with reject.

```js
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.includes('Node')) {
      resolve('fullstack developer')
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error(error))
```

```sh
Something wrong has happened
```

### 1. **Understanding the Promise (`doPromise`)**
```js
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills) // Fulfill the promise with skills array
    } else {
      reject('Something wrong has happened') // Reject the promise with an error message
    }
  }, 2000)
})
```
- A **Promise** is an object that represents a value that might be available now, in the future, or never.
- The `Promise` constructor takes a function with two parameters:  
  - `resolve(value)`: Called when the async operation succeeds.
  - `reject(error)`: Called when the async operation fails.
- Inside the promise:
  - A `setTimeout()` function is used to simulate a delay of **2 seconds**.
  - If the `skills` array has items, the promise is resolved with the `skills` array.
  - If `skills` is empty, the promise is rejected with an error message.

---

### 2. **Handling the Promise (`.then()` and `.catch()`)**
```js
doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))
```
- **`.then()`**: This method is called when the promise is successfully resolved.
  - It takes a function as an argument (`result => { console.log(result) }`).
  - The argument `result` will hold the value passed to `resolve()`, which is `['HTML', 'CSS', 'JS']` in this case.
  - The function inside `.then()` logs the result.

- **`.catch()`**: This method is executed if the promise is rejected.
  - It takes a function as an argument (`error => console.log(error)`).
  - If `reject()` is called (i.e., `skills` is empty), this function logs the error message.

---

### 3. **How the function is called**
- The promise is created **but does not execute immediately**.  
- After **2 seconds**, `setTimeout()` executes its callback function.  
- Depending on the condition:
  - If `skills.length > 0`, `resolve(skills)` is called.
  - If `skills.length == 0`, `reject('Something wrong has happened')` is called.
- If the promise is resolved, `.then()` executes and prints `['HTML', 'CSS', 'JS']`.
- If the promise is rejected, `.catch()` executes and prints the error message.

---

### 4. **Example Outputs**
#### If `skills` is `['HTML', 'CSS', 'JS']`:
```
['HTML', 'CSS', 'JS']
```
#### If `skills` is `[]` (empty array):
```
Something wrong has happened
```

---

### 5. **Summary**
- **`.then()`** runs when the promise **resolves** (success).
- **`.catch()`** runs when the promise **rejects** (failure).
- The function inside `.then()` receives the resolved value.
- The function inside `.catch()` receives the rejection message.


## Fetch API

The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set. In this challenge we will use fetch to request url and APIS. In addition to that let us see demonstrate use case of promises in accessing network resources using the fetch API.

```js
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens
```

## Async and Await

Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.

```js
const square = async function (n) {
  return n * n
}

square(2)
```

```sh
Promise {<resolved>: 4}
```

The word _async_ in front of a function means that function will return a promise. The above square function instead of a value it returns a promise.

How do we access the value from the promise? To access the value from the promise, we will use the keyword _await_.

```js
const square = async function (n) {
  return n * n
}
const value = await square(2)
console.log(value)
```

```sh
4
```

Now, as you can see from the above example writing async in front of a function create a promise and to get the value from a promise we use await. Async and await go together, one can not exist without the other.

Let us fetch API data using both promise method and async and await method.

- promise

```js
const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
```

- async and await

```js
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()
```

🌕 You are real and you kept your promise and you reached to day 18. Keep your promise and settle the challenge with resolve. You are 18 steps ahead to your way to greatness. Now do some exercises for your brain and  muscles.

## Exercises

```js
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
```

### Exercises: Level 1

1. Read the countries API using fetch and print the name of country, capital, languages, population and area.

### Exercises: Level 2

1. Print out all the cat names in to catNames variable.

### Exercises: Level 3

1. Read the cats api and find the average weight of cat in metric unit.
2. Read the countries api and find out the 10 largest countries
3. Read the countries api and count total number of languages in the world used as officials.

