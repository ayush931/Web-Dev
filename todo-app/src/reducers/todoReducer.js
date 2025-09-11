function todoReducer(state, action) {
  if (action.type === 'add_todo') {
    let todoText = action.payload.todoText;
    return [
      ...state, { id: state.length + 1, todoData: todoText, finished: false }
    ]
  }
  else if (action.type === 'edit_todo') {
    let todo = action.payload.todo;
    let todoText = action.payload.todoText;
    const updateTodo = state.map(t => {
      if (t.id === todo.id) {
        todo.todoData = todoText;
      }
      return t;
    })
    return updateTodo;
  }
  else if (action.type === 'delete_todo') {
    let todo = action.payload.todo;
    const deleteTodo = state.filter(t => t.id !== todo.id);
    return deleteTodo;
  }
  else if (action.type === 'finish_todo') {
    const todo = action.payload.todo;
    const isFinished = action.payload.isFinished
    const finishedTodo = state.map(t => {
      if (t.id === todo.id) {
        todo.finished = isFinished
      }
      return t;
    })
    return finishedTodo
  }
  else {
    return state;
  }
}

export default todoReducer;