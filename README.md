## 📦 Dev Stack

**Dev Stack** is a web app where developers can explore different frontend, backend, database, and tooling technologies, compare them, and build their own custom "development stack" by adding technologies to a personal stack list.

## 🌐 Live Demo
[https://nasir-sarkar.github.io/devstack/](https://nasir-sarkar.github.io/devstack/)

## 🛠️ Technologies Used
- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- GitHub Pages (deployment)

## ✨ Features
- **Browse Technologies** – See a curated list of popular frontend, backend, database, and tooling technologies, each with a rating, difficulty level, and short description.
- **Build Your Own Stack** – Add any technology to "Your Stack" with one click, and remove a single item or clear the whole stack instantly.
- **Instant Feedback with Toasts** – Every action (add, remove, already-added, stack cleared) shows a toast notification, so the user always knows what just happened.

---

## 📚 React Questions

**1. What is JSX, and why is it used in React?**
JSX is a special syntax that lets us write HTML-like code directly inside JavaScript. It's used in React because it makes it much easier to describe what the UI should look like, instead of writing plain JavaScript with `createElement` calls everywhere.

**2. What is the difference between props and state?**
Props are data passed **into** a component from its parent, and the component cannot change them itself — they are read-only. State is data that a component manages **on its own**, and it can change over time (for example, when the user clicks something). In short: props come from outside, state lives inside.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component keep and update its own data (state) between re-renders. In this project, I used it in `App.tsx` to store the list of technologies (`technologies`) and the loading status (`isLoading`), and in `Technologies.tsx` to store the user's selected stack (`stack`). I also used it in `Nav.tsx` to control whether the mobile menu is open or closed.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets us run some code after the component renders, usually for things like fetching data, timers, or subscriptions. I needed it to load `technologies.json` because fetching data is a "side effect" — it shouldn't run during rendering, and it should only run once when the app first loads, not every time the component re-renders. So I used `useEffect` with an empty dependency array (`[]`) in `App.tsx` to fetch the JSON only once.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` prop to identify which items changed, got added, or got removed when a list re-renders. Without a proper key, React can't track items correctly and might re-render the wrong elements or lose track of component state, which can cause bugs or slow performance.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition (like a value being true/false or empty/not empty). I used it in `YourStack.tsx` — if the stack is empty, it shows "Your stack is empty." message, and if it has items, it shows the list of added technologies instead:
```jsx
{stack.length === 0 ? (
  <div>Your stack is empty.</div>
) : (
  stack.map((technology, ind) => (
    <StackItem key={ind} technology={technology} stack={stack} setStack={setStack} />
  ))
)}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child using props — just like passing arguments to a function, e.g. `<TechnologyCard technology={technology} stack={stack} setStack={setStack} />`. To let the child send data back up, the parent passes down a function (like the `setStack` state setter) as a prop, and the child calls that function when something happens (for example, when the user clicks "Add to Stack"). This is how `TechnologyCard.tsx` updates the `stack` state that actually lives in the parent `Technologies.tsx`.
