-
  - [Console Object Methods](#console-object-methods)
  - [User Interaction Methods](#user-interaction-methods)
  - [Exercises](#exercises)

## Console Object Methods

The console object provides methods to log and debug code efficiently. Let's explore various console methods.

### console.log()
Used for logging messages to the console:

```js
console.log('30 Days of JavaScript')
console.log('%d %s of JavaScript', 30, 'Days')
console.log('%cStyled Log', 'color:blue; font-weight:bold')
```

### console.warn()
Used for displaying warnings:

```js
console.warn('This is a warning message')
```

### console.error()
Displays error messages:

```js
console.error('This is an error message')
```

### console.table()
Displays data as a table:

```js
const user = { name: 'Asabeneh', age: 250, country: 'Finland' }
console.table(user)
```

### console.time()
Measures execution time:

```js
console.time('Loop Time')
for (let i = 0; i < 100000; i++) {}
console.timeEnd('Loop Time')
```

### console.assert()
Checks conditions and logs errors if false:

```js
console.assert(10 > 20, '10 is not greater than 20')
```

### console.group()
Groups console logs:

```js
console.group('User Info')
console.log('Name: kebede')
console.log('Country: ethiopia')
console.groupEnd()
console.group('User 2 Info')
console.log('Name: abebe')
console.log('Country: kenya')
console.groupEnd()
```

### console.count()
Counts function calls:

```js
function counter() {
  console.count('Function executed')
}
counter()
counter()
```

### console.clear()
Clears the console:

```js
console.clear()
```

## User Interaction Methods

### prompt()
Prompts the user for input:

```js
let name = prompt('Enter your name:')
console.log('Hello, ' + name)
```

### confirm()
Displays a confirmation dialog:

```js
let isConfirmed = confirm('Do you want to continue?')
console.log(isConfirmed ? 'User agreed' : 'User canceled')
```

### alert()
Displays an alert message:

```js
alert('Welcome to JavaScript!')
```

## Exercises

### Level 1
1. Display an array as a table.
2. Display an object as a table.
3. Use console.group() to group logs.

### Level 2
1. Use console.assert() to test a condition.
2. Write a warning message using console.warn().
3. Write an error message using console.error().

### Level 3
1. Compare the execution time of different loops.
2. Use prompt() to collect user input and display it.
3. Use confirm() to ask the user a question and log the response.

