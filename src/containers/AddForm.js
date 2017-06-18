import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todos';


const Form = ({onSubmit}) => (
  <div>
    <input type="text" placeholder='Add todo' onKeyDown={onSubmit}/>
  </div>
)

const mapStateToProps = (state) => (
  {
    todos: state.todos
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    onSubmit: (event) => {
      const input = event.target;
      const text = input.value;
      const isEnterKey = (event.which === 13);
      const isLongEnough = text.length > 0

      if (isEnterKey && isLongEnough) {
        input.value = '';
        dispatch(addTodo(text));
      }
    }
  }
)

const AddForm = connect(mapStateToProps, mapDispatchToProps)(Form);
export default AddForm;
