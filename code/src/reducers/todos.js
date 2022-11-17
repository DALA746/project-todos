import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = action.payload;
      store.items = [...store.items, newTodo];
      console.log(store.items);
    },
    toggleTodo: (store, action) => {
      const task = store.items.find((item) => item.id === action.payload);
      task.isComplete = !task.isComplete;
    },
    deleteTodo: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );

      store.items = decreasedItems;
    },
    clearAllTodos: (store) => {
      store.items = [];
    },
  },
});

export default todos;
