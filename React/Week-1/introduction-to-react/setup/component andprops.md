### 📘 What is a React Component?
A React component is a reusable building block of your UI. Think of a component like a small chunk of a webpage that you can use repeatedly in different places in your app. Components help break down complex user interfaces into smaller, manageable parts.

### 🔧 Types of React Components:
1 .Functional Components (Modern approach)

2 .Class Components (Older approach)

## 🧑‍💻 Functional Components:
A Functional Component is a JavaScript function that returns JSX (which looks like HTML). These are simpler to write and are the most common in modern React development.

Example:
```
import React from 'react';

const Greeting = () => {
  return <h1>Hello, World!</h1>;
};

export default Greeting;
```
In this example:

- Greeting is a functional component that returns an h1 element.

- This component doesn't take any input (no props here) and just displays a static message.

## 🧑‍💻 Class Components:
A Class Component is a JavaScript class that extends React.Component. It has a render() method that returns JSX.

Example:
```
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

export default Greeting;
```

- Greeting is a class component that extends React.Component.

- It has a render() method, which is used to return the JSX that will be displayed.

🔄 Key Concept:
- JSX is used inside components to describe how the UI should look.

- A component can be reused in different places within your app.

✨ Conclusion:
- React components are the building blocks of your app.

- Functional components are simple functions that return JSX and are commonly used in React apps.

Class components are a more complex way of creating components (older style, less common now).
- example 
 ```
import React from 'react';
const Button = () => {
  return <button className="btn">Click Me</button>;
};

export default Button;
 ```
 for main page  used like this 

  ```
 import React from 'react';
import Button from './Button'; // Import the Button component


const App = () => {
  return (
    <div>
      <h1>Welcome to My React App!</h1>
      <Button /> 
    </div>
  );
};

export default App;
 ```

### 💡 What Are Props in React?
- Props (short for properties) are used to pass data from a parent component to a child component in React.

They allow you to:

- Reuse the same component with different data

- Make components more dynamic and maintainable

- Keep your app modular and clean

```
const Welcome = (props) => {
  return <h2>Welcome, {props.name}!</h2>;
};

export default Welcome;
```
```
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Welcome name="there" />
      <Welcome name="developers" />
    </div>
  );
}

export default App;
```
## Destructuring Props (Cleaner Syntax)
Instead of writing props.name, you can write this:
```
const Welcome = ({ name, country }) => {
  return <h2>Hello, {name} from {country}</h2>;
};
```
Now you don’t need to write props. every time.
```
// App.jsx
import Welcome from './Welcome';

function App() {
  return <Welcome name="Mieraf" country="Ethiopia" />;
}
```
exercise 

1. work animalcard component that pass image and title as props.