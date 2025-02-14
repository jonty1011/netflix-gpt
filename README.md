# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

// Redux tool kit
 -- Redux is a state management tool for React applications. It helps manage global state, so data can be shared between components easily.

import { configureStore } from "@reduxjs/toolkit";

 configureStore() is a function from Redux Toolkit that creates a Redux store.
It makes the setup process simpler than the traditional createStore method.
It requires a reducer, which is responsible for handling changes to the state.

reducer()
In Redux, a reducer is a function that controls how the state changes based on an action.

useDispatch() is a React-Redux hook that allows you to send (dispatch) actions to the Redux store.

It is used to update the Redux state by triggering reducers through actions.

useDispatch() is a React-Redux hook that allows you to send (dispatch) actions to the Redux store