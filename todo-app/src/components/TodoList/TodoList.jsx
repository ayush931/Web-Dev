import { useContext } from 'react';
import Todo from '../Todo/Todo';
import TodoContext from '../../context/TodoContext';

function Todolist() {
  const { list, setList } = useContext(TodoContext);

  function onFinished(isFinished, todo) {
    const updatedList = list.map((t) => {
      if (t.id === todo.id) {
        todo.finished = isFinished;
      }
      return t;
    });
    setList(updatedList);
  }

  function onDelete(todo) {
    const deleteTodo = list.filter((t) => t.id !== todo.id);
    setList(deleteTodo);
  }

  function onEdit(todo, todoText) {
    const editedData = list.map((t) => {
      if (t.id === todo.id) {
        todo.todoData = todoText;
      }
      return t;
    });
    setList(editedData);
  }

  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            todoData={todo.todoData}
            changeFinished={(isFinished) => onFinished(todo, isFinished)}
            onDelete={() => onDelete(todo)}
            onEdit={(todoText) => onEdit(todo, todoText)}
          />
        ))}
    </div>
  );
}

export default Todolist;
