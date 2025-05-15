

# 🎯 React Tic-Tac-Toe Game – Part 1: Displaying Squares



## 🛠 Step 1: Start With One Button

Let’s begin with a single square on the board. Nothing fancy. Just one lonely button.

```jsx
export default function Square() {
  return <button className="square">X</button>;
}
```

 **What’s happening?**

* This is your first JSX return.
* React is showing one `<button>` with the label `X`.

🎉 Boom! You’ve just rendered your first Tic-Tac-Toe square! Only 8 more to go. 😅
---
what next is try to add other button thant to get 9 
## 😬 Step 2: Try to Add Another Button (and Break the Rules)

You might be tempted to get ambitious and do this:

```jsx
export default function Square() {
  return (
    <button className="square">X</button>
    <button className="square">X</button>
  );
}
```

🚨 **React screams in pain:**

```
Adjacent JSX elements must be wrapped in an enclosing tag.
```

🎭 **Translation:**
"Whoa! I need a box to put those buttons in. You can’t just throw stuff around here!"

---

## 🧙‍♂️ Step 3: Fix It with a Fragment (The Magic Cloak 🧥)

Wrap them in a **JSX Fragment** like this:

```jsx
export default function Square() {
  return (
    <>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  );
}
```

✅ **Now React is happy again.**

📦 A Fragment is like an invisible container — it groups elements without adding extra HTML.

**Fun Fact:** It’s like Tupperware for your buttons. Stack them neatly before serving.

---

## 😕 Step 4: Wait... All Buttons Are in a Line!?

Three buttons in a row? More like a **Tic-Tac-Wrong**. 😂

Let’s make it look like a **real board**, not a row of sad square pancakes.

---

## 🧱 Step 5: Add Rows and Numbers (Grid Time!)

Group squares into rows with `<div>`s, and give each square a number so you can tell them apart (and not step on their toes):

```jsx
export default function Square() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}
```

✨ Now it looks like a real board. You’re cooking with React! 🍳

---

## 🧼 Step 6: Rename `Square` to `Board`

Since this component is now managing the **entire board**, it deserves a promotion!

```jsx
export default function Board() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}
```

🥳 Congratulations! You’ve made a Tic-Tac-Toe board appear using just React and determination (and a bit of caffeine, maybe? ☕).

---

## 🧾 Part 1 Recap – What You Mastered Like a Boss

| ✅ Step | 🔍 What You Did                   | 💥 Why It Matters                                  |
| ------ | --------------------------------- | -------------------------------------------------- |
| 1      | Rendered one square               | You dipped your toe in JSX                         |
| 2      | Broke React with multiple buttons | You learned the “One Parent to Rule Them All” rule |
| 3      | Used a Fragment                   | You wrapped buttons like a pro                     |
| 4      | Grouped squares into rows         | Now it looks like a real board                     |
| 5      | Added numbers                     | Now the board has character! 🎭                    |
| 6      | Renamed to `Board`                | Clean structure = happy code life 🧼               |

---

### 🔜 Coming Next in Part 2:

> *“Give those buttons some brains!”* 🧠

* Make each square a **reusable component**
* Pass different text to them with **props**
* Make them interactive with **state (`useState`)**


---

# 🎯 React Tic-Tac-Toe – Part 2: Reusing One Square Component with Props

---

## 🤔 What’s the problem?

In **Part 1**, we had this board:

```jsx
export default function Board() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      {/* ... other rows */}
    </>
  );
}
```

Looks fine but… what if every square was its own component? Wouldn’t that be cleaner and easier to manage? Let’s try!

---

## 🔄 Step 1: Make a single `Square` component

```jsx
function Square() {
  return <button className="square">1</button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
```

---

## 😵 Uh-oh! What happened?

Every square shows **"1"** — but we want the numbers 1 through 9!

Why? Because the `Square` component **always** renders a button with `1`. We didn’t tell it to change!

---

## 💡 Step 2: Use props to pass data to `Square`

Let’s give `Square` a **property** called `value` that tells it what to display.

Update `Square` to accept a prop:

```jsx
function Square({ value }) {
  return <button className="square">1</button>; // still shows 1 for now
}
```

But wait, that still shows 1 because the button text is **hardcoded**.

---

## 🧙‍♂️ Step 3: Make the button display the `value` prop

You want to show the actual value, not the word `"value"`. In JSX, to use JavaScript variables inside HTML, wrap them in curly braces `{}`.

Change `Square` to:

```jsx
function Square({ value }) {
  return <button className="square">{value}</button>;
}
```

---

## ❓ Why curly braces?

Because JSX mixes JavaScript and HTML. Curly braces tell React “escape HTML mode, run this JavaScript!”

Without `{}`, React treats the word as a string. With `{}`, it’s a variable.

---

## 🥳 Step 4: Pass different values from the Board

The `Board` component must now **send different values** to each `Square`:

```jsx
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
```

---

## 🎉 Now the board shows different numbers!

Every `Square` is the same component, but each one gets a different `value` prop. React renders them accordingly.

---

## 🔍 Summary – What did we learn in Part 2?

| Step | What Happened                                 | Why It Matters                       |
| ---- | --------------------------------------------- | ------------------------------------ |
| 1    | Made one `Square` component                   | Reusability is key!                  |
| 2    | All squares looked the same (“1”)             | Because value was hardcoded          |
| 3    | Passed `value` prop and used `{value}` in JSX | Made the button dynamic and reusable |
| 4    | Sent different `value`s from `Board`          | Controlled children via parent props |

---

## 💡 React Tip:

Props are how **parents communicate with children** in React.

Think of it like a **mailman delivering letters** — each letter (prop) tells a child what to do or display.

---

## 🎯 Code Recap (Final working version)

```jsx
function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
```

---

# 🎉 You did it! You’ve learned about:

* Components reusability
* Passing **props** to customize components
* How to use `{}` in JSX for JavaScript expressions

Ready for **Part 3**?

> Making the squares **interactive** with `useState` so players can click and toggle X or O!

Great! You're now entering the **interactive** phase of your Tic-Tac-Toe game by adding the ability to respond to **clicks**. Let's turn this into **Part 3** of your student-friendly React notes:

---

# 🎮 React Tic-Tac-Toe – Part 3: Handling Clicks (User Interaction)

---

## 🧠 Goal:

We want each square to **respond** when a user clicks it.

Not like “Hey! Who clicked me?!” but more like "Aha! I'm clicked, let's do something useful."

---

## 🧱 Current Code:

```jsx
function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
```

---

## 🔍 What just happened?

In the `Square` component, we added:

```js
function handleClick() {
  console.log('clicked!');
}
```

And then told React:
📌 "Hey React, when this button is clicked, please run `handleClick()`."

```jsx
<button onClick={handleClick}>...</button>
```

---

## 💬 But where is the **button called**?

Trick question 😄 – the button isn’t **called** like a regular function.

Instead:

* You **return JSX** from the `Square` function.
* React **renders** this JSX as actual HTML in the DOM.
* When the user clicks it in the browser, the `onClick` triggers the `handleClick` function.

📦 It’s like you **package** the button + behavior and React takes care of putting it on the page and wiring up the events.

---

## 👀 What do you see in the console?

Every time you click a square, you should see:

```
clicked!
```

in your browser's **Console** tab (open DevTools with F12 or right-click > Inspect > Console).

---

## 🎭 But nothing changes visually, yet!

We are **logging to the console**, but the UI doesn’t change yet. Don’t worry — that’s coming next.

---

## 💡 Key Takeaways

| Concept            | What It Means                                                        |
| ------------------ | -------------------------------------------------------------------- |
| `onClick`          | React event that lets you respond to clicks                          |
| `handleClick`      | Your custom function that runs when the square is clicked            |
| No `function call` | Buttons are created through JSX, not called like normal JS functions |
| React renders JSX  | React reads your return code and adds it to the actual webpage (DOM) |

---

## 😄 Fun analogy

React is like a pizza delivery app 🍕:

* You **create the pizza** (`<button>`) in the kitchen (JSX).
* React **delivers** it to the customer (DOM).
* When the customer **clicks the pizza**, you trigger the "eating" function (`handleClick`).
* But right now, they only *say* "Yum!" in the Console 😋

---

## ✅ Summary

* We added interactivity with `onClick`
* Now every square responds when clicked
* Next step: Make squares **change** their value on click (like "X" or "O") using **`useState`**

---

Awesome! You're doing a great job guiding students through React, one square at a time 😄 Let's now prepare **Part 4** of your React Tic-Tac-Toe tutorial — **adding state** to make the squares show an `"X"` when clicked.

---

# 🎯 React Tic-Tac-Toe – Part 4: Using `useState` to Remember Clicks

---

## 🧠 What are we trying to do?

We want each square to **remember** that it was clicked, and display an `"X"` when that happens.

Just like people use memory to remember what they had for lunch (or forgot 😅), React components use **`useState`** to remember things like values, clicks, and changes.

---

## 🧪 Problem Before:

Earlier, you had this code:

```jsx
function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
```

You passed `value` from the parent (`Board`) and only logged a message when clicked. But logging doesn't change the UI.

Time to make the button **do something** visually!

---

## ✅ Step-by-Step Upgrade: Using `useState`

---

### 🔹 1. **Import `useState`**

At the top of your file, import the state hook from React:

```js
import { useState } from 'react';
```

### 🔹 2. **Update the Square component**

Instead of passing `value` from the parent, each square will manage its own value using `useState`.

### 🧠 What is `useState`?

```js
const [value, setValue] = useState(null);
```

* `value`: this is your square’s current state (starts as `null`).
* `setValue`: this is the **function** you use to **change** the square’s value.
* `useState(null)`: initializes the square to be empty (`null`).

### 🖱️ Replace the `console.log` with state change:

```js
function handleClick() {
  setValue('X');
}
```

---

### ✅ Final Updated `Square` Code

```jsx
function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
```

---

### 🔄 Update the Board component

We’re no longer passing the `value` prop to `Square`, so simplify your `<Board />`:

```jsx
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
```

---

### 🧪 What Happens Now?

🎉 When you click on any square, it updates to `"X"` — thanks to state!

React notices that a state variable (`value`) has changed and **re-renders** that component.

---

## 🧠 Key Concepts Recap

| Concept          | What It Does                                    |
| ---------------- | ----------------------------------------------- |
| `useState(null)` | Initializes a state variable (starts as `null`) |
| `value`          | The current value of this square                |
| `setValue('X')`  | Changes the square's value and causes re-render |
| No more `props`  | Squares now manage their own state              |

---

## 🃏 Bonus Joke (Because learning should be fun!)

> Why did the React square break up with its prop?
>
> Because it wanted to **manage its own state** 😎

---

## ✅ Summary

* You learned how to **use `useState`** to store click info
* Now each square can **remember** it was clicked and show `"X"`
* You’ve turned dumb buttons into smart, stateful squares!

---

Ready for **Part 5**? We’ll make the `"X"` and `"O"` alternate based on whose turn it is!

Just say: **"Let’s do part 5!"** and I’ll guide you through it. 🧩
Perfect — you’re now entering the **“Lifting State Up”** phase of your Tic-Tac-Toe tutorial. Let’s walk through this step in a clean, memorable way. This is Part 5 of your journey: **Centralizing the game’s state in the `Board` component**.

---

# 🧠 React Tic-Tac-Toe – Part 5: Lifting State Up (and Sharing It!)

---

## 🧩 Why move state from `Square` to `Board`?

Right now, each `Square` keeps track of its own value. That works fine for just displaying `"X"`, but now:

* We want to **alternate between `"X"` and `"O"`**
* We need to **check for a winner**, which requires seeing all squares at once

💡 **React’s philosophy**: To share or coordinate data between components, store that shared state in their **common parent**.

So we “lift” the `value` state **up** into the `Board` component.

---

## 🛠️ Step-by-Step: Move `value` state into `Board`

---

### ✅ 1. `Board` will hold all 9 values using an array

```jsx
import { useState } from 'react';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
```

* We’re creating 1 single state variable: `squares`
* It’s an array of 9 `null`s: one for each square
* Example:
  Before clicking: `squares = [null, null, null, ..., null]`
  After a few moves: `squares = ['X', 'O', null, ..., 'X']`

---

### ✅ 2. Pass square values to each `Square` using props

```jsx
return (
  <>
    <div className="board-row">
      <Square value={squares[0]} />
      <Square value={squares[1]} />
      <Square value={squares[2]} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} />
      <Square value={squares[4]} />
      <Square value={squares[5]} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} />
      <Square value={squares[7]} />
      <Square value={squares[8]} />
    </div>
  </>
);
```

---

### ✅ 3. Update `Square` to **receive `value` as a prop** and be dumb (no state!)

```jsx
function Square({ value }) {
  return (
    <button className="square">
      {value}
    </button>
  );
}
```

* We removed `useState` from `Square` ✅
* `Square` now just **displays** what it’s told
* Smart logic lives in `Board` — cleaner and easier to control!

---

## 🧠 Why this is better

| Before (bad)                    | After (better)                   |
| ------------------------------- | -------------------------------- |
| Each `Square` had its own state | Only `Board` manages game state  |
| Hard to check who won           | Easy to check using `squares[]`  |
| Can't coordinate `"X"` / `"O"`  | One `Board` state = full control |

---

## 🃏 Joke time!

> Why did the Square get kicked out of the team?
>
> Because it didn’t share its **state** with anyone! 😂

---

## ✅ What’s Next?

Now that all squares get their value from the `Board`, we’re ready to:

* Handle **clicks** from each square at the `Board` level
* Alternate between `"X"` and `"O"`
* Detect a **winner**

🧩 This will be **Part 6** of the series: **Handling Square Clicks in the Board**

Say the word — “**Let’s do Part 6**” — and I’ll guide you right through it!
Awesome — let’s continue with **Part 6 of your React Tic-Tac-Toe tutorial**:
🎯 **Handling clicks in the Board component and dynamically updating squares**

---

# 🎮 Part 6: Square Clicks Update Board State

You've just made a key architectural shift: the `Board` now **owns the game state**, and `Square` components just **display** and **notify**.

Now let’s complete Part 6 by:

* Handling clicks in the `Board`
* Dynamically updating the clicked square
* Preparing to alternate turns in the next step

---

## ✅ What You Have Now

You’ve done a great job setting this up already:

### ✔️ `Square` is now a *dumb* display component:

```jsx
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```

### ✔️ `Board` owns all game state and logic:

```jsx
import { useState } from 'react';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X'; // Hardcoded to X for now
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
```

---

## ⌛ What Happens Now?

Clicking a square calls `handleClick(i)`, which:

* Copies the `squares` array
* Sets the clicked square to `"X"`
* Updates state via `setSquares(nextSquares)`
* Triggers a re-render of the `Board`
* `Square` gets new props → it updates

✅ **This works beautifully**, but…

---

## 🔁 What’s the problem?

You're still **always placing "X"**, no matter how many times you click.

You need:

* A way to **alternate between "X" and "O"**
* To **ignore clicks on already-filled squares**

Let’s handle both in **Part 7**!

---

### 🎯 Next Step – Part 7 Preview: Alternating Between “X” and “O”

In Part 7, you’ll:

1. Add a `xIsNext` state variable to track the current player
2. Update `handleClick()` to use it:

   * Place `"X"` if `xIsNext` is true
   * Place `"O"` if it’s false
3. Flip the turn after each click

You’ll also:

* Prevent clicking the same square again
* (Soon) Add winner logic

---

Say “**Let’s do Part 7**” and I’ll walk you through that! You're doing great — just a couple more steps and you’ll have a full game!
Certainly! Let's break down this function **line by line**, understand **what it does**, and explain **why it's written this way in React**.

---

### 📌 Code:

```jsx
function handleClick(i) {
  const nextSquares = squares.slice();
  nextSquares[i] = 'X';
  setSquares(nextSquares);
}
```

---

## 🔍 Line-by-Line Explanation

---

### 🧠 `function handleClick(i) {`

* This defines a function named `handleClick`.
* It takes a parameter `i`, which represents **the index of the square that was clicked** (from 0 to 8, since there are 9 squares).

---

### 📤 `const nextSquares = squares.slice();`

* `squares` is a **state variable** from the `useState` hook in the `Board` component. It’s an array of 9 elements representing the game board.
* `.slice()` creates a **shallow copy** of that array.

Why do this?

> 🔒 **Important React rule**: You should **never modify state directly**. Instead, **make a copy**, change the copy, and then update the state with the copy.

If you did `squares[i] = 'X'`, you’d be **mutating state directly**, which could cause bugs or unpredictable behavior in React.

---

### ✏️ `nextSquares[i] = 'X';`

* This line sets the value of the `i`th square to `"X"` — meaning an `"X"` is placed in the clicked square.

Right now it’s hardcoded to `'X'`, but in the next step (Part 7), you'll switch between `'X'` and `'O'`.

---

### 🆕 `setSquares(nextSquares);`

* This line **updates the state** by calling the `setSquares` function provided by `useState`.
* It tells React: "Hey, update the `squares` state to use this new array (`nextSquares`)."

What happens after this?

> 🔁 React automatically re-renders the component (in this case, `Board`) so that the UI reflects the new state.

---

## 🧩 Summary

| Code                                   | What It Does                                       |
| -------------------------------------- | -------------------------------------------------- |
| `function handleClick(i)`              | Defines a function to run when a square is clicked |
| `const nextSquares = squares.slice();` | Creates a copy of the current game state           |
| `nextSquares[i] = 'X';`                | Places an 'X' in the clicked square                |
| `setSquares(nextSquares);`             | Updates the game state with the modified copy      |

---

### ✅ Result

When you click a square, that square updates to show `'X'`, and the board rerenders to reflect the change.

---

Would you like me to show this with a visual or flow diagram too? Or move on to adding `'O'` and switching turns (Part 7)?
Absolutely! Let’s dive into **🎯 Part 7 of your React Tic-Tac-Toe tutorial** — and this one is all about **alternating turns** and **preventing overwrites**. 🌀

---

# 🎮 Part 7: Taking Turns & Preventing Overwrites

Right now, every square click places only an **"X"**, and worse — clicking again **replaces** it with another mark. Let’s fix that in a clean and enjoyable way.

---

## ✅ Step-by-Step Guide to Alternate Turns

---

### 🧩 Step 1: Add a New Piece of State → `xIsNext`

This will help us **keep track of who’s next** — `'X'` or `'O'`.

🔧 Update the top of your `Board` component like this:

```jsx
const [xIsNext, setXIsNext] = useState(true); // true = X’s turn, false = O’s turn
```

So now we have:

```jsx
const [squares, setSquares] = useState(Array(9).fill(null));
const [xIsNext, setXIsNext] = useState(true);
```

---

### 🧩 Step 2: Use `xIsNext` to Place "X" or "O"

Inside your `handleClick(i)` function, let’s update the code to **place the correct player’s symbol**:

```jsx
const nextSquares = squares.slice();
nextSquares[i] = xIsNext ? 'X' : 'O';
```

Then flip the turn:

```jsx
setXIsNext(!xIsNext);
```

---

### 🧩 Step 3: Prevent Clicking a Filled Square

Add this at the **top** of `handleClick()`:

```jsx
if (squares[i]) return;
```

So now the full function looks like this:

```jsx
function handleClick(i) {
  if (squares[i]) return;

  const nextSquares = squares.slice();
  nextSquares[i] = xIsNext ? 'X' : 'O';

  setSquares(nextSquares);
  setXIsNext(!xIsNext);
}
```

---

### ✅ Step 4: The Updated Full `Board` Component

```jsx
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
```

---

## 💡 Recap of What’s Happening

✅ `xIsNext` keeps track of whose turn it is
✅ You **alternate** between `'X'` and `'O'` with each move
✅ You **can’t overwrite** an already-filled square
✅ State stays **immutable**, so React can track changes easily

---

### 🧠 Bonus Tip: Want to show **whose turn it is**?

Add this right above the board:

```jsx
const currentPlayer = xIsNext ? "X" : "O";
<h2>Next player: {currentPlayer}</h2>
```

---

## 🎉 You Did It!

You now have:

* A working turn-based system ✅
* Basic move validation ✅
* All state centralized and React-compliant ✅

---

### 🚀 Next: Part 8 – Declaring a Winner!

In the next part, you’ll:

* Add winner detection logic
* Prevent moves once the game is over
* Show the winner at the top

Say **“Let’s do Part 8”** and I’ll guide you through it!
Got it! You’re on the home stretch! 🏁

---

# 🎉 Final Part: Declaring the Winner and Displaying the Status

This part puts everything together to:

* Detect when someone has won,
* Prevent any more moves after a win,
* Show a message with either the winner or whose turn is next.

---

## Here’s the **full, final version** of your React Tic-Tac-Toe `Board` component with the `calculateWinner` helper function:

```jsx
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    // If there's a winner or the square is already filled, ignore click
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? 'X' : 'O';

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // returns 'X' or 'O'
    }
  }
  return null; // no winner yet
}
```

---

## How it works:

* **`calculateWinner`** checks all winning combinations for 3 matching squares.
* If a winner is found, the game **stops accepting clicks** (`handleClick` returns early).
* The **status** shows either the winner or who’s next.
* State updates trigger a re-render, updating the UI automatically.

---

## 🎯 What you achieved:

* ✅ Squares toggle between X and O each turn
* ✅ Moves can’t be made on filled squares
* ✅ Game detects a winner correctly
* ✅ Game stops after a win
* ✅ Status displays winner or next player info

---

If you want, I can help you next with:

* Adding a **restart button** to reset the game
* Showing **move history** (time travel!)
* Highlighting winning squares
* Or anything else you want to build on top

Just say the word! 🚀
