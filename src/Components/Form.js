import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Form({ todo, setTodo, todoList, setTodoList }) {

const handleChange = (event) => {
    setTodo(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, todo]);
    // console.log(todoList);
}

  return (
    <div>
        <form onSubmit={handleSubmit} className='todoform'>
            <input 
                value={todo} 
                onChange={handleChange} 
                className='input' 
                placeholder='Add To-Dos...' 
            />
            <button 
                type='submit' 
                className='todobutton'>
                    <FontAwesomeIcon icon={faAdd} />
                </button>
        </form>
    </div>
  )
}

export default Form;