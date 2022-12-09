import './App.css';
import Navbar from './Component/Navbar';
import InputAdd from './Component/InputAdd';
import Todo from './Component/Todo';
import Footer from './Component/Footer'
import { useState } from 'react';

function App() {
  // For each new to-do item delivered from InputAdd.js, state has to be provided
  // as an array using useState, because the item is passed here. Initially
  // it is an empty array [].
  const [newToDoArray, setNewToDoArray] = useState([]);

  // create a method for the array to add the items in the existing item array
  const addToDos = (item) =>{
    setNewToDoArray([...newToDoArray, item])
    console.log("add button works")
  };

  const deleteToDos = (item) => {
    console.log(item)
    setNewToDoArray(newToDoArray.filter(toDoItem => toDoItem.id !== item.id)) 
  };

  return (
    <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Navbar navItem1="Week" navItem2="Day"/>
              <h1 className="todos-heading">To-dos in Christmas week</h1>
              <h1 className="create-task-heading">
                Create <span className="create-task-heading-subpart">Task</span>
              </h1>
              <InputAdd newToDoInput={addToDos} />
              <h1 className="todo-items-heading">
                My <span className="todo-items-heading-subpart">Tasks</span>
              </h1>
              {newToDoArray.map(toDoItem => {return <Todo key={toDoItem.id} toDos={toDoItem} deleteItemProp={deleteToDos}/>})}
            </div>
          </div>
        </div>
        <Footer footContent={"Copyrights reserved to MANS"}/>

    </>
    

   
  );
}

export default App;
