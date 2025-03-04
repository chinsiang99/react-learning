# react-learning
This repo is for me to learn react

## Initialization of a project

First we need to use npm create vite@latest

# What is State
- State is a way to store and manage data that can change over time and affects how the component renders. We define state using the useState Hook, which allows you to set an initial value and provides a way to update that state

## useState()
useState() Hook allows us to **track state** in a functional component. State generally refers to data or properties that need to be tracking in an application

# What is Hooks
- Hooks are new addition in React 16.8. They let you use state and other React features without writing a class

# What is Portal
- Portal is a feature that allows you to render a child component into a DOM node that exist outside the hierarchy of the parent component. This can be useful for scenarios like modals, tooltips, or dropdowns, where you want to break out of the usual parent-child structure and render in a different part of the DOM

# What is useEffect
- useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM etc

# What is Context API
- Context API is a feature that allows you to **manage and share state** across your component tree without having to pass props down manually at every level. It's useful for scenarios where you need to share data or functions acrosss many components, especially when these components are deeply nested

# What is useContext
- useContext Hook allows us to access the context values provided by a Context object directly within a functional component. Context provides a way to pass data through the component tree without having to pass props down manually at every level

# What is useReducer
- useReducer is a hook that is similar to useState, but it is designed for **more complex** state objects or state transitions that involves multiple sub-values. It allows you to manage state in a functional, immutable way

3:00:26 => video length