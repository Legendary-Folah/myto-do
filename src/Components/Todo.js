import React, {useState} from 'react'
import ListItem from './ListItem';

function Todo() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event) => {
      setTodo(event.target.value);
      // console.log(todo);
    }

    const handleSubmit = (event) => {
      event.preventDefault();  
      // templateList is the new array to store the list
      let templateList = todoList;
      templateList.push(todo);
      setTodoList(templateList);
      console.log(todoList);
      setTodo('');
    }
  return (
    <div>
        <h2>My To-Do</h2>
        <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handleChange} type='text'></input>
            <button type='submit'>Add Todo!</button>
        </form>
        {todoList.map((item, index) => {
          return (
            <ListItem key={index} name={item}/>
          )
        })}
    </div>
  )
}

export default Todo;