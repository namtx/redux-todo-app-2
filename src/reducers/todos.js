import {ADD_TODO, TOGGLE_TODO} from '../constants';

const initialState = [
  {
    index: 0,
    text: 'Learn Redux',
    completed: false
  }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, {
          text: action.text,
          id: action.id,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        return (todo.id === action.id) ? Object.assign(todo, {completed: !todo.completed}) : todo;
      });
    default:
      return state;
  }
};

export default todos;
