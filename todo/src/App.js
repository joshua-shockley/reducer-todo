import React, {useState, useReducer} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TodoForm from './components/TodoForm';
import {Todo} from './components/Todo.js';
import { initialState, todoReducer } from './reducers/TodoReducer';


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  
  
  const addStuff = (bananaWord) => dispatch({type: 'ADD-TODO',payload: bananaWord})
  const deleteStuff = () => dispatch({type: 'DELETE-TODO'})
  const toggleTodo  = (id) => dispatch({type: 'TOGGLE-COMPLETED',payload: id })
  return (
    <div className="App">
      <header className="App-header">
      Welcome To Another Installation Of: To Do List!
      </header>
      <div className="app-body">
        <TodoForm 
        todo={state.todo}
        addStuff={addStuff}
        deleteStuff={deleteStuff}/>
        <Todo 
        key={state.todo.id}
        todo={state.todo}
        toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;
