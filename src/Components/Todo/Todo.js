import React from 'react';
import classes from './Todo.module.css'



export default function Todo({text, todo, todos, setTodos}) {
     
    const deleteHandler = () =>{
      setTodos(todos.filter(item =>item.id !== todo.id))
    console.log(todos);
    };


    const completeHandler = () =>{
        setTodos(todos.map(item => {
            if(item.id  === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
       <div className={classes.Todo}>
         <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
               {text}
           </li>
           <button onClick={completeHandler} className={classes.CompleteBtn}>
               <i className="fas fa-check"></i></button>
           <button onClick={deleteHandler} className={classes.TrashBtn}>
               <i className="fas fa-trash"></i></button>


              


       </div>
    );
  }
  
 

 