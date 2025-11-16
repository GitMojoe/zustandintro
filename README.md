# Zustand Introduction and Examples

This repository contains three React applications demonstrating the use of Zustand, a small, fast, and scalable state management library for React.

## What is Zustand?

Zustand is a lightweight state management solution for React applications. It provides a simple API for creating stores that can be used across components without the need for complex setup like Redux. Zustand uses hooks to access and update state, making it easy to integrate with React's functional components.

Key features of Zustand:
- Minimal API
- TypeScript support out of the box
- No boilerplate code
- Built-in support for async actions
- Small bundle size

## Project Structure

The repository includes three example applications:

### 1. my-react-app (Basic Zustand Usage)

This is a simple counter application that demonstrates the basic concepts of Zustand.

**Key Concepts:**
- Creating a store with `create()`
- Defining state and actions
- Using the store in components with hooks
- Updating state immutably

**Files:**
- `src/store.js`: Defines the counter store with increment and decrement actions
- `src/App.jsx`: Uses the store to display and update the counter

### 2. my-react-app-auth (Authentication State Management)

This application shows how to manage authentication state with Zustand.

**Key Concepts:**
- Managing user authentication state
- Actions that update state based on user input
- Conditional rendering based on state

**Files:**
- `src/store.js`: Defines the auth store with login and logout actions
- `src/App.jsx`: Main app component
- `src/Login.jsx`: Component that triggers login
- `src/Profile.jsx`: Component that displays user info based on auth state

### 3. my-react-app-async (Async Operations with Zustand)

This application demonstrates handling asynchronous operations, such as API calls, with Zustand.

**Key Concepts:**
- Managing loading and error states
- Async actions in stores
- Fetching data from APIs
- Handling promises and errors

**Files:**
- `src/Userstore.js`: Defines the user store with async fetchUsers action
- `src/App.jsx`: Main app component
- `src/Users.jsx`: Component that displays users and handles loading/error states

## Getting Started

To run any of these applications:

1. Navigate to the desired app directory:
   ```bash
   cd my-react-app  # or my-react-app-auth or my-react-app-async
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173` (or the port shown in the terminal)

## Zustand Best Practices

- Keep stores focused on specific domains
- Use selectors to prevent unnecessary re-renders
- Handle async operations properly with loading and error states
- Use TypeScript for better type safety
- Avoid storing large objects in state; use IDs and fetch data as needed

## Further Reading

- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Zustand GitHub](https://github.com/pmndrs/zustand)
