import React, {useState} from 'react';


export default function TodoForm (props) {


const[newTodo, setNewTodo]= useState('');
const [newDate, setNewDate]=useState('');
    // console.log(props);

const handleChange = event => {
setNewTodo( event.target.value);
setNewDate( event.target.value);

}
const handleClick = event => {
    event.preventDefault();
    props.deleteStuff();
}
const handleSubmit = e => {
    e.preventDefault();
    props.addStuff(newTodo, newDate);
    setNewTodo('');
}
console.log(props.todo);
    return(
        <form >
            <input
            type="text"
            name="newtodo"
            placeholder="add new todo"
            onChange={handleChange}
            value={newTodo}
            />
            {/* <input
            type="text"
            name="dueBy"
            placeholder="Due By What WeekDay"
            onChange={handleChange}
            value={newDate}
            /> */}
            <button 
            type="submit"
            onClick={handleSubmit}
            >
            add new todo
            </button>
            <button onClick={handleClick}>clear completed</button>
        </form>
    );
};