import { useReducer } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Todolist from './components/TodoList/TodoList';
import TodoContext from './context/TodoContext';
import todoReducer from './reducers/todoReducer';
import TodoDispatchContext from './context/TodoDispatchContext';

function App() {
  const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <AddTodo />
        <Todolist />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
