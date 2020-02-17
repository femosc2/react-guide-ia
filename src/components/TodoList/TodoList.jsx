import React from 'react';
import { Todo } from './components/Todo';

export const TodoList = (props) => {
  const { todos, setNewTodo, newTodo, addNewTodo, completeTask } = props;
  return (
    <section>
      <h1> Todolist with React!</h1>
      <ul>
       { todos.map((todo) => <Todo task={ todo.task } completed={ todo.completed } started={ todo.started} completeTask={ completeTask } />) } 
      </ul>
      <h2>New Todo:</h2>
      <input type="text" onChange={ (e) => setNewTodo(e.target.value) } value={ newTodo } />
      <button onClick={ () => addNewTodo()} disabled={ newTodo.length === 0}> Add New Todo</button>
      
    </section>
  )
}

