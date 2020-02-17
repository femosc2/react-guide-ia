import React from 'react';

export const Todo = (props) => {
  const { task, completed, started, completeTask } = props;

  return (
    <li>
      <h2> { task } </h2>
      {/* The name of the task */}
      <h3 onClick={ () => completeTask((completed ? false : true), task )}>Completed? { completed ? '✔' : 'X' }</h3>
      {/* If completed is true, toggle it to false and vice versa */}
      {!completed && <h3>Started? { started  ? '✔' : 'X' } </h3> }
      {/* Only show the Started h3 if the todo is not completed */}
    </li>
  )
}