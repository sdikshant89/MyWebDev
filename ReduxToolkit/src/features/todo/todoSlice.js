import { createSlice, nanoid } from '@reduxjs/toolkit';

//nanoid is used to generate unique IDs for elements in the store

// When the Redux store is created, it uses the initialState from each slice to build the full state.
const initialState = {
  todos: [
    {
      id: 1,
      text: 'Hello',
    },
  ],
};

// Slice is more of a combination of reducers for a specific part of the store.
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // reducers include properties and functions that can be used to modify the state
  reducers: {
    // state includes the present state of the store (store is initialState)
    // action is more like a parameter which includes the payload
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        // payload can be an object
        text: action.payload.text,
      };
      // API call if needed here.
      state.todos.push(todo);
      console.log('todo added');
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      // API call if needed here.
      console.log('todo removed with id:', action.payload.id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
