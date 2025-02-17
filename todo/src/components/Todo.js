import React, { useState } from 'react';
// import { initialState, todoReducer } from '../reducers/TodoReducer';
export const Todo= (props) =>{
// const [newTodo, setNewTodo] = useState({initialState})
// const [state, dispatch] = useReducer(todoReducer, initialState)


let toDoList = props.todo;
// console.log(toDoList);
    return(
        <div>
            <h1>Stuff To Do</h1>
            {toDoList.map(theDo => (
                <section 
                onClick={() => props.toggleTodo(theDo.id)} 
                className={theDo.completed ? "completed" : ""} 
                >
                <div className="list-values" >{theDo.item}</div>
                <div className="list-values" >By: {theDo.dueBy}</div>
                </section>
                
            ))}
        </div>
    );
}