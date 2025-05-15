

# React Tic-Tac-Toe Tutorial

## 1. Basic Single Button (Square) Component

```jsx
export default function Square() {
  return <button className="square">X</button>
}
```

This renders a single button with the label `X`.

---

## 2. Multiple Buttons - Need to wrap in a container

This is **incorrect** because React expects a single parent in `return`:

```jsx
export default function Square() {
  return (
    <button className="square">X</button>
    <button className="square">x</button>  
  )
}
```

---

## 3. Correct multiple buttons using React Fragments

Wrap buttons inside `<>...</>` to return multiple sibling elements:

```jsx
export default function Square() {
  return (
    <>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  )
}
```

---

## 4. Render 9 Buttons (like Tic-Tac-Toe squares)

```jsx
export default function Square() {
  return (
    <>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  )
}
```

---

## 5. Buttons appear in a row? Group into rows!

Add `<div>` containers with a class `board-row` for rows:

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
  )
}
```

---

## 6. Refactor buttons into `Square` component

Create a reusable `Square` component:

```jsx
function Square() {
  return <button className="square">1</button>
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
  )
}
```

---

## 7. Pass dynamic value to each Square

```jsx
function Square({ value }) {
  return <button className="square">{value}</button>
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
  )
}
```

---

## 8. Add click handler in `Square`

```jsx
function Square({ value }) {
  function handleClick() {
    console.log('clicked!')
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  )
}
```

---

## 9. Add state in `Square` (initial simple state)

```jsx
import { useState } from 'react'

function Square() {
  const [value, setValue] = useState(null)

  function handleClick() {
    setValue('X')
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  )
}
```

---

## 10. Lift state up to `Board`

`Board` manages the game state, passes value & click handler to each `Square`

```jsx
import { useState } from 'react'

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares)
  let status = winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O')

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
  )
}
```

---

## 11. Calculate winner function

```jsx
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
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
```

---

# Summary:

* `Square` is a button component receiving `value` and `onSquareClick`.
* `Board` holds the game state: an array of squares and which player is next.
* Clicking a square updates the state with `X` or `O` and toggles the player.
* The `calculateWinner` function checks if a player has won.
* The UI displays the status (next player or winner).

---
