---
title: React State vs Props — Beginner Notes
date: 2025-09-05
tags: [react, state, props]
summary: My beginner-friendly explanation of the difference between state and props.
---

# React State vs Props — Beginner Notes

When I first started learning React, the difference between state and props confused me. Here's how I think about them now:

## State: The Internal Control Panel

Think of state like a component's internal control panel. It's data that the component owns and can change.

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

The `count` variable is state because:
- The Counter component owns it
- The Counter component can change it
- When it changes, the component re-renders

## Props: The Wiring Harness

Props are like a wiring harness that connects components. They're data passed from a parent component to a child component.

```jsx
function Welcome({ name, age }) {
  return <h1>Hello {name}, you are {age} years old!</h1>;
}

function App() {
  return <Welcome name="Elizabeth" age={25} />;
}
```

The `name` and `age` are props because:
- They come from the parent (App)
- The child (Welcome) receives them but can't change them
- They're like function parameters

## Key Differences

| State | Props |
|-------|-------|
| Internal to component | Passed from parent |
| Can be changed | Read-only |
| Triggers re-renders when changed | Component re-renders when props change |
| Use `useState` hook | Function parameters |

## When to Use Which?

- **Use state** when the component needs to track changing data
- **Use props** when you need to pass data from parent to child

This mental model has helped me understand React's data flow much better!
