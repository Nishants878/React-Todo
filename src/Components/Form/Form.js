import React from 'react';
import classes from './Form.module.css';





 function Form({ setInputText, todos, setTodos, inputText }) {
    
     const inputTextHandler = (e)=>{
         
       setInputText(e.target.value);
       
       
     }

    const submitHandler = (e)=>{
        e.preventDefault();
       
        
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000 }
        ]);
        setInputText("");

    }
 
    return (
        <form className={classes.FormContainer}>
        <input value={inputText} onChange={inputTextHandler} type="text" className={classes.Input}/>
        <button onClick={submitHandler} className={classes.SubmitButton}><i className={["fas", "fa-arrow-right", classes.Icons].join(' ')}></i> </button>
       
      </form>
    )
}




export default  Form

