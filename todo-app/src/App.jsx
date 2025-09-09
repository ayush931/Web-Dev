import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Todolist from './components/TodoList/TodoList';

function App() {
  const [list, setList] = useState([
    { id: 1, todoData: 'todo 1', finished: false },
    { id: 2, todoData: 'todo 2', finished: true },
  ]);

  return (
    <>
      <AddTodo
        updateTodo={(todo) =>
          setList([
            ...list,
            { id: list.length + 1, todoData: todo, finished: false },
          ])
        }
      />
      <Todolist list={list} />
    </>
  );
}

export default App;
