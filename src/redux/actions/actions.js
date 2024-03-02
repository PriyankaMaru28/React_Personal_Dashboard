import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../constant";

export const addNewTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const completeTodo = (id, isComplete) => ({
  type: COMPLETE_TODO,
  payload: {
    id: id,
    isComplete: isComplete,
  },
});
