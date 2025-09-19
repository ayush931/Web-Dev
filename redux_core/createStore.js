import { bindActionCreators, combineReducers, createStore } from "redux";

const ADD_TODO = 'add_todo';
const EDIT_TODO = 'edit_todo';
const DELETE_TODO = 'delete_todo';
const ADD_USER = 'add_user';

function todoReducer(state = [], action) {
  if (action.type === ADD_TODO) {
    const todoText = action.payload.todoText;
    return [
      ...state, { text: todoText, isFinished: false, id: (state.length === 0) ? 1 : state[state.length - 1].id + 1 }
    ]
  }
  else if (action.type === DELETE_TODO) {
    const todoId = action.payload.todoId;
    return state.filter(t => t.id !== todoId);
  }
  else if (action.type === EDIT_TODO) {
    const todo = action.payload.todo;
    const todoText = action.payload.todoText;
    return state.map(t => {
      if(t.id === todo.id) {
        t.text = todoText;
      }
      return t;
    })
  }
  return state;
}

function userReducer(state = [], action) {
  if (action.type === 'add_user') {
    const username = action.payload.username;
    return [
      ...state,
      { name: username, id: (state.length === 0) ? 1 : state[state.length - 1].id + 1 }
    ]
  }

  return state;
}

const reducers = combineReducers({ todo: todoReducer, user: userReducer })

const addTodo = (todoText) => ({ type: ADD_TODO, payload: { todoText } });
const deleteTodo = (id) => ({ type: DELETE_TODO, payload: { todoId: id } });
const addUser = (name) => ({ type: ADD_USER, payload: { username: name } });

const { dispatch, subscribe, getState, replaceReducer }  = createStore(reducers);

subscribe(() => console.log(getState()));   // dont have to repeat the logic after changing the state

// dispatch(addTodo('todo 1'));
// console.log(getState());

// dispatch(addTodo('todo 2'));
// console.log(getState());

// dispatch(deleteTodo(1));
// console.log(getState());

const actions = bindActionCreators({ addTodo, deleteTodo, addUser }, dispatch);  // binding all the actions together with the dispatch
actions.addTodo('todo 1');
actions.addTodo('todo 2');
actions.deleteTodo(1);
actions.addUser('ayush');
