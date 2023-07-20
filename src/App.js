import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';

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
    </div>
  );
}

export default App;
