import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shortid from 'shortid';
import React from 'react';

function Form({ todo, setTodo, todoList, setTodoList }) {

const handleChange = (event) => {
    setTodo(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, {name: todo, id: shortid.generate() }]);
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
                    <FontAwesomeIcon icon={faCheck} />
                </button>
        </form>
    </div>
  )
}

export default Form;