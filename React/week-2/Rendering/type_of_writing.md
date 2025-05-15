

### 1) Using a **function declaration + export at the end**

```jsx
function Square() {
  return (
    <button className="square">X</button>
  );
}

export default Square;
```

* You **declare** the function named `Square`.
* Then, at the end, you **export it as the default export**.
* This is useful if you want to declare multiple functions in one file and export them selectively.

---

### 2) Using a **default export inline with a function expression**

```jsx
export default function Square() {
  return <button className="square">X</button>;
}
```

* This **defines and exports** the function `Square` in one step.
* It’s shorter and common for simple components in one file.
* You can’t reuse this function name elsewhere in the same file since it’s declared as a default export inline.

---

### Both are functionally the **same** — they both:

* Define a React functional component named `Square`.
* Return a button with class `"square"` and text `"X"`.
* Export that component as the default export of the module.

---

### When to use which?

| Style                                              | When to use                                                          |
| -------------------------------------------------- | -------------------------------------------------------------------- |
| `function Square() { ... } export default Square;` | If you want to define multiple functions or export more things later |
| `export default function Square() { ... }`         | Quick, clean for single-component files                              |

---

