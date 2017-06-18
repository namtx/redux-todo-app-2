import React from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleTodo} from '../actions/todos';
import Todo from '../components/Todo';

const List = ({toggleClick, todos}) => (
  <div>
    <ul>
      {
        todos.map(todo => (
          <Todo key={todo.id} onClick={()=> toggleClick(todo.id)} {...todo}/>
        ))
      }
    </ul>
  </div>
);

const mapStateToProps = (state) => (
  {
    todos: state.todos
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    toggleClick: id => dispatch(toggleTodo(id))
  }
);

const TodoList = connect(mapStateToProps, mapDispatchToProps)(List);
export default TodoList;
