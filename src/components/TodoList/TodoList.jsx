import React from 'react';
import { Todo } from './components/Todo';

export const TodoList = (props) => {
  const { todos, setNewTodo, newTodo, addNewTodo, completeTask } = props;
  return (
    <section>
      <h1> Todolist with React!</h1>
      <ul>
       { todos.map((todo) => <Todo task={ todo.task } completed={ todo.completed } started={ todo.started} completeTask={ completeTask } />) } 
       {/* mapping the todos and passing down the task, completed and started props from its parent. */}
      </ul>
      <h2>New Todo:</h2>
      <input type="text" onChange={ (e) => setNewTodo(e.target.value) } value={ newTodo } />
      {/* The input field using an onchange to update the state and value for seeing showing the state */}
      <button onClick={ () => addNewTodo()} disabled={ newTodo.length === 0}> Add New Todo</button>
      {/* Button for adding new todo, it's disabled while the input is empty */}
      
    </section>
  )
}

