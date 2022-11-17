import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import todos from './reducers/todos';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

/* SETTING FOR STORE */
const reducer = combineReducers({
  todos: todos.reducer,
});

// set up for a local store
const persistedStateJSON = localStorage.getItem('reduxState');
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = createStore(reducer, persistedState);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <main className='main-content'>
        <div className='content-wrapper'>
          <AddTodo />
          <TodoList />
        </div>
      </main>
    </Provider>
  );
};
