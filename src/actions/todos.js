import {ADD_TODO, TOGGLE_TODO} from '../constants';

const uid = () => Math.random().toString(34).slice(2);

export const addTodo = (text) => (
  {
    type: ADD_TODO,
    text: text,
    id: uid()
  }
);

export const toggleTodo = (id) => (
  {
    type: TOGGLE_TODO,
    id: id
  }
);
