import './App.css';
import Todo from './Component/Todo';
import Form from "./Component/Form";
import List from "./Component/List"
import {useState} from "react"


  export default function App() {
const [text, setText] = useState("")

    function handleChange(e) {
      setText(e.target.value)
    }

    const submitForm = (e) => {
      console.log('Hello');
      e.preventDefault();
      if (!text) {
        alert('Please write a Todo.');
      }
    }


  return (
   
    <>
     <div className="todos-bg-container">
      
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="todos-heading">Todos</h1>
          <h1 className="create-task-heading">
            Create <span className="create-task-heading-subpart">Task</span>
          </h1>
          <form onSubmit={submitForm}>
          <input type="text" placeholder="Todo" onChange={handleChange} id="todoUserInput" className="todo-user-input" />
          <button className="add-todo-button">Add</button> </form>
          <h1 className="todo-items-heading">
            My <span className="todo-items-heading-subpart">Tasks</span>
          </h1>
          <ul className="todo-items-container" id="todoItemsContainer">
          
          
          </ul>
        </div>
      </div>
    </div>
  </div>
    </>
    

   
  );
}


