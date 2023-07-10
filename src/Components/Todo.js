import React, {useState} from 'react'

function Todo() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event) => {
      setTodo(event.target.value)
      console.log(todo);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      
    }
  return (
    <div>
        <h2>My To-Do</h2>
        <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handleChange} type='text'></input>
            <button type='submit'>Add Todo!</button>
        </form>
    </div>
  )
}

export default Todo