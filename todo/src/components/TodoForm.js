import React, {useState} from 'react';


export default function TodoForm (props) {


const[newTodo, setNewTodo]= useState({item: '', dueBy: '' });

const handleChange = event => {
setNewTodo({...newTodo, [event.target.name]: event.target.value} );

}
const handleClick = event => {
    event.preventDefault();
    props.deleteStuff();
}
const handleSubmit = e => {
    e.preventDefault();
    props.addStuff(newTodo);
    setNewTodo('');
}
// console.log(props.todo);
    return(
        <form >
            <fieldset>
            <input
            type="text"
            name="item"
            placeholder="add new todo"
            onChange={handleChange}
            value={newTodo.item}
            />
            <input
            type="text"
            name="dueBy"
            placeholder="Due By What WeekDay"
            onChange={handleChange}
            value={newTodo.dueBy}
            />
            <button className="buttons" 
            type="submit"
            onClick={handleSubmit}
            >
            add new todo
            </button>
            <button className="buttons" onClick={handleClick}>clear completed</button>
        </fieldset>
        </form>
    );
};