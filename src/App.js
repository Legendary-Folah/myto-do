import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';
import Todo from './Components/Todo';

function App() {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  return (
    <div className="App">
      <Header />
      <Form 
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <Todo />
    </div>
  );
}

export default App;
