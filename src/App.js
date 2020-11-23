
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import classes from './App.module.css';

import NavBar from './Components/NavBar/NavBar';
import TodoContainer from './Components/TodoContainer/TodoContainer'


function App() {
  
  return (
    
     <BrowserRouter>
    <div className={classes.App}>
      <NavBar/>
      <div className={classes.MainContent}>
     <TodoContainer/>

      </div>
    </div>
    </BrowserRouter>
   
    
    
  );
}

export default App;
