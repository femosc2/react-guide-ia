import React from 'react';

export const Todo = (props) => {
  const { task, completed, started, completeTask } = props;

  return (
    <li>
      <h2> { task } </h2>
      <h3 onClick={ () => completeTask((completed ? false : true), task )}>Completed? { completed ? '✔' : 'X' }</h3>
      {!completed && <h3>Started? { started  ? '✔' : 'X' } </h3> }
    </li>
  )
}