import React, { useState, useEffect } from 'react';
import { TodoList } from './TodoList';

export const TodoListContainer = () => {
  const [todos, setTodos] = useState([ // The todolist state, using three objects by default
    {
      task: 'Create React Guide',
      completed: false,
      started: true,
    },
    {
      task: 'Create Vue Guide',
      completed: false,
      started: false,
    },
    {
      task: 'Read the articles on ES6, SPAs and Npm!',
      completed: true,
      started: true,
    }
  ]);

  const [newTodo, setNewTodo] = useState('');

  const addNewTodo = () => {
    setTodos([...todos, {
    task: newTodo,
    completed: false,
    started: false,
    }]);
    setNewTodo('');
  };

  const completeTask = (isCompleted, nameOfTask) => {
    const filteredTodos = [...todos].filter((todo) => todo.task !== nameOfTask); // An Array of the Todos without the one which is getting updated.
    const todoToUpdate = [...todos].filter((todo) => todo.task === nameOfTask)[0]; // An Array of the todo which is getting updated [0] meaning the first object (and there will always only be one).
    const updatedListOfTodos = [...filteredTodos, {
      task: nameOfTask,
      completed: isCompleted,
      isStarted: todoToUpdate.started,
    }];

    const sortedListOfTodos = [...updatedListOfTodos].sort((a,b) => a.task.localeCompare(b.task)); // Sorting the list by name.

    setTodos(sortedListOfTodos);
  };

  return (
    <TodoList todos={ todos } setNewTodo={ setNewTodo } newTodo={ newTodo } addNewTodo={ addNewTodo } completeTask={ completeTask } />
  )
}

