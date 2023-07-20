import React from 'react'

function Form({ todo, setTodo, todoList, setTodoList }) {

const handleChange = (event) => {
    setTodo(event.target.value);
}

  return (
    <div>
        <form className='todoform'>
            <input 
                value={todo} 
                onChange={handleChange} 
                className='input' 
                placeholder='Add To-Dos...' 
            />
            <button 
                type='submit' 
                className='todobutton'>Add To-Do(s)</button>
        </form>
    </div>
  )
}

export default Form;