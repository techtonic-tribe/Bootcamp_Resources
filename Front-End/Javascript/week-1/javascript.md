![JS]([img/JavaScript-Symbol.png]([https://private-user-images.githubusercontent.com/166186565/371894036-dd34a4ac-667f-4429-9705-f0fc64c64bd9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzEwOTA3ODcsIm5iZiI6MTczMTA5MDQ4NywicGF0aCI6Ii8xNjYxODY1NjUvMzcxODk0MDM2LWRkMzRhNGFjLTY2N2YtNDQyOS05NzA1LWYwZmM2NGM2NGJkOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEwOFQxODI4MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lN2E5NDQyNTQzNTg4ZGMwNTRjNDRmMDAzYzNlMDQ3ZDNiYzNlZjFmNTMyOTI5YzI1YTE1YzBlZDNlZjE4ZjQ4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.BZUfGYjj80KOXpGGwiPB3rhD0Ub0CVWSTCKMP02M7jA](https://private-user-images.githubusercontent.com/166186565/371894036-dd34a4ac-667f-4429-9705-f0fc64c64bd9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzEyNDY0MzQsIm5iZiI6MTczMTI0NjEzNCwicGF0aCI6Ii8xNjYxODY1NjUvMzcxODk0MDM2LWRkMzRhNGFjLTY2N2YtNDQyOS05NzA1LWYwZmM2NGM2NGJkOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTExMFQxMzQyMTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kODkzMDEwYzc3ODJhMDQ3NGExMGY4ODc5NWQxMjc5ZmQxYjQyYjI1ZjhjZmIwOTExNDViMzg4NTUyZmVkOThlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.zRbUjTrYWQo5x42oS6573PbTM5nvOogWdaZqmb00NMw)))
# Introduction tofcv JavaScript

JavaScript is a **programming language** used to create interactive effects inside web browsers. It is one of the core technologies of the web, alongside HTML and CSS.
## Table of Contents
1. [what is JavaScript?](#what-is-javascript)
2. [Setting up JavaScript](#setting-up-javascript)
3. [Comments](#comments)
4. [Arithmetics](#arithmetics)
5. [Adding JavaScript to a Web Page](#adding-javascript-to-a-web-page)
3. [Introduction of data type](#introduction-to-data-types)
4. [variables](#variables)
5. [Control Structures](#control-structures)
6. [Functions](#functions)
7. [DOM Manipulation](#dom-manipulation)

---

## What is JavaScript?

JavaScript is the language that adds functionality to a website. With it, you can:
- Change HTML content dynamically
- React to user events
- Validate forms, and much more!

## Setting up JavaScript

### Install Node.js
You may not need Node.js right now but you may need it for later. Install [node.js](https://nodejs.org/en/). 

![install node](img/Screenshot%202024-09-28%20114825.png)

After downloading double click and install

We can check if node is installed on our local machine by opening our device terminal or command prompt.

```sh
node -v
v12.14.0
```
### Browser

There are many browsers out there. However, I strongly recommend Google Chrome.

![Opening chrome](img/Screenshot%202024-09-28%20114902.png)
#### Opening Google Chrome Console

You can open Google Chrome console either by clicking three dots at the top right corner of the browser, selecting _More tools -> Developer tools_ or using a keyboard shortcut. I prefer using shortcuts.
![Opening chrome](img/Screenshot%202024-09-28%20114936.png)

To open the Chrome console using a keyboard shortcut.

```sh
Mac
Command+Option+J

Windows/Linux:
Ctl+Shift+J
```
![Opening console](img/Screenshot%202024-09-28%20114956.png)

After you open the Google Chrome console, try to explore the marked buttons. We will spend most of the time on the Console. The Console is the place where your JavaScript code goes. The Google Console V8 engine changes your JavaScript code to machine code.
Let us write a JavaScript code on the Google Chrome console:

![write code on console](./img/Screenshot%202024-09-28%20115623.png)


#### Writing Code on Browser Console

We can write any JavaScript code on the Google console or any browser console. However, for this challenge, we only focus on Google Chrome console. Open the console using:

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

### Console.log

To write our first JavaScript code, we used a built-in function **console.log()**. We passed an argument as input data, and the function displays the output. We passed `'Hello, World'` as input data or argument in the console.log() function.

```js
console.log('Hello, World!')
```
##### Console.log with Multiple Arguments

The **`console.log()`** function can take multiple parameters separated by commas. The syntax looks like as follows:**`console.log(param1, param2, param3)`**

![console log multiple arguments](./img/Screenshot%202024-09-28%20115646.png)

```js
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')
```

As you can see from the snippet code above, _`console.log()`_ can take multiple arguments.

## Comments

We can add comments to our code. Comments are very important to make code more readable and to leave remarks in our code. JavaScript does not execute the comment part of our code. In JavaScript, any text line starting with // in JavaScript is a comment, and anything enclosed like this `//` is also a comment.

**Example: Single Line Comment**

```js
// This is the first comment  
// This is the second comment  
// I am a single line comment
```

**Example: Multiline Comment**

```js
/*
This is a multiline comment  
 Multiline comments can take multiple lines  
 JavaScript is the language of the web  
 */
```





---
You can run JavaScript directly in the browser. Here's a basic example of how to include JavaScript in your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Example</title>
</head>
<body>
  <h1>Hello, JavaScript!</h1>

  <script>
    console.log('Hello, world!');
  </script>
</body>
</html>
```

## Syntax
#### Syntax

Syntax
Programming languages are similar to human languages. English or many other language uses words, phrases, sentences, compound sentences and other more to convey a meaningful message. The English meaning of syntax is the arrangement of words and phrases to create well-formed sentences in a language. The technical definition of syntax is the structure of statements in a computer language. Programming languages have syntax. JavaScript is a programming language and like other programming languages it has its own syntax. If we do not write a syntax that JavaScript understands, it will raise different types of errors. We will explore different kinds of JavaScript errors later. For now, let us see syntax errors.

![syntax](img/Screenshot%202024-09-28%20115713.png)

## Arithmetics

Now, let us practice more writing JavaScript codes using _`console.log()`_ on Google Chrome console for number data types.
In addition to the text, we can also do mathematical calculations using JavaScript. Let us do the following simple calculations.
It is possible to write JavaScript code on Google Chrome console can directly without the **_`console.log()`_** function. However, it is included in this introduction because most of this challenge would be taking place in a text editor where the usage of the function would be mandatory. You can play around directly with instructions on the console.

![Arithmetic](img/Screenshot%202024-09-28%20115732.png)

```js
console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3
```

### Code Editor

We can write our codes on the browser console, but it won't be for bigger projects. In a real working environment, developers use different code editors to write their codes. In this 30 days of JavaScript challenge, we will be using Visual Studio Code.

#### Installing Visual Studio Code

Visual Studio Code is a very popular open-source text editor. I would recommend to [download Visual Studio Code](https://code.visualstudio.com/), but if you are in favor of other editors, feel free to follow with what you have.


If you installed Visual Studio Code, let us start using it.

## Adding JavaScript to a Web Page

JavaScript can be added to a web page in three different ways:

- **_Inline script_**
- **_Internal script_**
- **_External script_**
- **_Multiple External scripts_**

The following sections show different ways of adding JavaScript code to your web page.

### Inline Script

Create a project folder on your desktop or in any location, name it 30DaysOfJS and create an **_`index.html`_** file in the project folder. Then paste the following code and open it in a browser, for example [Chrome](https://www.google.com/chrome/).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Inline Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to Techtonic')">Click Me</button>
  </body>
</html>
```

Now, you just wrote your first inline script. We can create a pop up alert message using the _`alert()`_ built-in function.

### Internal Script

The internal script can be written in the _`head`_ or the _`body`_, but it is preferred to put it on the body of the HTML document.
First, let us write on the head part of the page.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Internal Script</title>
    <script>
      console.log('Welcome to Techtonic')
    </script>
  </head>
  <body></body>
</html>
```

This is how we write an internal script most of the time. Writing the JavaScript code in the body section is the most preferred option. Open the browser console to see the output from the `console.log()`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Internal Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to TechTonic tribe');">Click Me</button>
    <script>
      console.log('Welcome to TechTonic tribe')
    </script>
  </body>
</html>
```

Open the browser console to see the output from the `console.log()`.

![js code from vscode](./img/Screenshot%202024-09-29%20143514.png)

### External Script

Similar to the internal script, the external script link can be on the header or body, but it is preferred to put it in the body.
First, we should create an external JavaScript file with .js extension. All files ending with .js extension are JavaScript files. Create a file named introduction.js inside your project directory and write the following code and link this .js file at the bottom of the body.

```js
console.log('Welcome to TechTonic tribe')
```

External scripts in the _head_:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript:External script</title>
    <script src="introduction.js"></script>
  </head>
  <body></body>
</html>
```

External scripts in the _body_:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript:External script</title>
  </head>
  <body>
    <!-- JavaScript external link could be in the header or in the body --> 
    <!-- Before the closing tag of the body is the recommended place to put the external JavaScript script -->
    <script src="introduction.js"></script>
  </body>
</html>
```

Open the browser console to see the output of the `console.log()`.

### Multiple External Scripts

We can also link multiple external JavaScript files to a web page.
Create a `helloworld.js` file inside the 30DaysOfJS folder and write the following code.

```js
console.log('Hello, World!')
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Multiple External Scripts</title>
  </head>
  <body>
    <script src="./helloworld.js"></script>
    <script src="./introduction.js"></script>
  </body>
</html>
```

_Your main.js file should be below all other scripts_. It is very important to remember this.

![Multiple Script](./img/Screenshot%202024-09-29%20143353.png)

## Introduction to Data types

In JavaScript and also other programming languages, there are different types of data types. The following are JavaScript primitive data types: _String, Number, Boolean, undefined, Null_, and _Symbol_.

### Numbers

- Integers: Integer (negative, zero and positive) numbers
  Example:
  ... -3, -2, -1, 0, 1, 2, 3 ...
- Float-point numbers: Decimal number
  Example
  ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

### Strings

A collection of one or more characters between two single quotes, double quotes, or backticks.

**Example:**

```js
'a'
'Abebe'
"Nardos"
'Ethiopia'
'JavaScript is a beautiful programming language'
'I love teaching'
'I hope you are enjoying the first day'
`We can also create a string using a backtick`
'A string could be just as small as one character or as big as many pages'
'Any data type under a single quote, double quote or backtick is a string'
```

### Booleans

A boolean value is either True or False. Any comparisons returns a boolean value, which is either true or false.

A boolean data type is either a true or false value.

**Example:**

```js
true // if the light is on, the value is true
false // if the light is off, the value is false
```

### Undefined

In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

```js
let firstName
console.log(firstName) // undefined, because it is not assigned to a value yet
```

### Null

Null in JavaScript means an empty value.

```js
let emptyValue = null
```

## Checking Data Types

To check the data type of a certain variable, we use the **typeof** operator. See the following example.

```js
console.log(typeof 'Nardos') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined
```



## Variables

Variables are _containers_ of data. Variables are used to _store_ data in a memory location. When a variable is declared, a memory location is reserved. When a variable is assigned to a value (data), the memory space will be filled with that data. To declare a variable, we use _var_, _let_, or _const_ keywords.

For a variable that changes at a different time, we use _let_. If the data does not change at all, we use _const_. For example, PI, country name, gravity do not change, and we can use _const_. We will not use var in this challenge and I don't recommend you to use it. It is error prone way of declaring variable it has lots of leak. We will talk more about var, let, and const in detail in other sections (scope). For now, the above explanation is enough.

A valid JavaScript variable name must follow the following rules:

- A JavaScript variable name should not begin with a number.
- A JavaScript variable name does not allow special characters except dollar sign and underscore.
- A JavaScript variable name follows a camelCase convention.
- A JavaScript variable name should not have space between words.

The following are examples of valid JavaScript variables.

```js
firstName
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020
```

The first and second variables on the list follows the camelCase convention of declaring in JavaScript. In this material, we will use camelCase variables(camelWithOneHump). We use CamelCase(CamelWithTwoHump) to declare classes, we will discuss about classes and objects in other section.

Example of invalid variables:

```js
  first-name
  1_num
  num_#_1
```

Let us declare variables with different data types. To declare a variable, we need to use _let_ or _const_ keyword before the variable name. Following the variable name, we write an equal sign (assignment operator), and a value(assigned data).

```js
// Syntax
let nameOfVariable = value
```

The nameOfVriable is the name that stores different data of value. See below for detail examples.

**Examples of declared variables**

```js
// Declaring different variables of different data types
let firstName = 'Nardos' // first name of a person
let lastName = 'Anteneh' // last name of a person
let country = 'Ethiopia' // country
let city = 'Addis Ababa' // capital city
let age = 100 // age in years
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried)
```

```sh
Nardos Anteneh Ethiopia Addis Ababa 100 true
```

```js
// Declaring variables with number values
let age = 100 // age in years
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity, boilingPoint, PI)
```

```sh
9.81 100 3.14
```

```js
// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = 'Nardos', job = 'Student', live = 'Ethiopa'
console.log(name, job, live)
```
 ## Control Structures

Control structures allow you to control the flow of code based on conditions or repetitive tasks.

# 1. Conditional Statements

### `if` Statement
Executes a block of code if a specified condition is `true`.
#### Syntax
```javascript
if (condition) {
  // code to execute if condition is true
}
```
### Example
```javascript
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote.");
}
// Output: You are eligible to vote.
```


 ##  if...else Statement

The `if...else` statement is used to execute code based on a condition. If the condition is `true`, the code inside the `if` block runs. If it’s `false`, the code inside the `else` block executes.

#### Syntax

```javascript
if (condition) {
  // code to execute if the condition is true
} else {
  // code to execute if the condition is false
}
```
### Example
```js
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or lower");
}
```
## `switch` Statement
The `switch` statement is useful when you have multiple possible values for a variable and want to execute different code depending on the value. Each case in the `switch` statement corresponds to a possible value.
### Example
```js
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}
// Output: Wednesday
```
## `if else` Statement





