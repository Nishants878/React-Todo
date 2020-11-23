import React, { useState } from 'react';
import classes from './TodoContainer.module.css';
import Form from '../Form/Form'
import TodoList from '../TodoList/TodoList'

export default function TodoContainer() {
    const [inputText, setInputText] = useState  ("");
    const [todos, setTodos] = useState([]);
    return (
        <div className={classes.HomePageMainContainer}>
            <div className={classes.MainContent}>
                <h2 className={classes.Header}>
                    Yours Todo List
                </h2>
                <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    <TodoList setTodos={setTodos} todos={todos}/>
            </div>
        </div>
    )
}
