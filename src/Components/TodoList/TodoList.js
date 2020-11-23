import React from 'react';
import Todo from '../../Components/Todo/Todo';
import classes from './TodoList.module.css'


export default function TodoList({todos, setTodos}) {
    return (
        <div className={classes.TodoContainer}>
        <ul className={classes.TodoList}>
         
         {
           todos.map(todo => (
             <Todo
             setTodos={setTodos} 
             todos={todos}
               todo={todo}
             text={todo.text} id={todo.id} key={todo.id}/>
           ))
         }
        </ul>
      </div>
    );
  }