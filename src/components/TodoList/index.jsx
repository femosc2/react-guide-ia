import React, { useState, useEffect } from 'react';
import { TodoList } from './TodoList';

export const TodoListContainer = () => {
  const [todos, setTodos] = useState([
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
    const filteredTodos = [...todos].filter((todo) => todo.task !== nameOfTask)
    const todoToUpdate = [...todos].filter((todo) => todo.task === nameOfTask)[0];
    const updatedListOfTodos = [...filteredTodos, {
      task: nameOfTask,
      completed: isCompleted,
      isStarted: todoToUpdate.started,
    }];

    const sortedListOfTodos = [...updatedListOfTodos].sort((a,b) => a.task.localeCompare(b.task));

    setTodos(sortedListOfTodos);
  };

  return (
    <TodoList todos={ todos } setNewTodo={ setNewTodo } newTodo={ newTodo } addNewTodo={ addNewTodo } completeTask={ completeTask } />
  )
}

