# 👉 Lazy Loading with React.lazy() and Suspense

## 1️⃣ What is Lazy Loading in React?

### Definition:

<p> Lazy loading means loading components only when they are actually needed, instead of loading the entire app’s code upfront.</p>

<p>
React apps bundle all code together (via tools like Vite or Webpack).
Without lazy loading → the browser downloads everything at once, which slows down the initial page load.
</p>

## Lazy loading helps split your bundle — so only the code required for the current route is loaded.

## 2️⃣ Why It’s Needed (Real Use Case)

```code
Imagine your app has these pages:

/ → Home

/about → About

/products → Products

/profile → Profile
```

<p>If you load all components at once:

The bundle might be 3–5 MB.

The user on a slow connection waits unnecessarily.

Instead, with lazy loading:

Only the Home page loads first.

Other components (About, Products, etc.) are fetched on demand when visited.

💡 This makes the app faster and more efficient.</p>
---


