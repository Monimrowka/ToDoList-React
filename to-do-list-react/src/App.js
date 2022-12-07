import './App.css';
import Todo from './Component/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';

let doList = [
  {
    text: "Learn HTML",
    
    uniqueNo: 1
  },
  {
    text: "Learn CSS",
   
    uniqueNo: 2
  },
  {
    text: "Learn JavaScript",
    uniqueNo: 3
  }
];



 function App() {

  
  
  return (
    <>
     <div className="dos-bg-container">
          <h1 className="dos-heading">To-do-list</h1>
          <h1 className="create-task-heading">
            Create <span className="create-task-heading-subpart">Task</span>
          </h1>
          <input type="text" id="doUserInput" className="todo-user-input" />
          <button className="add-do-button" >Add</button>
          <h1 className="do-items-heading">
            My <span className="do-items-heading-subpart">Tasks</span>
          </h1>
          <ul className="do-items-container" id="doItemsContainer">
          {doList.map((eachItem) => (
           <Todo textcontent={eachItem} />
          
          ))}
          
          
          </ul>
        
      </div>
    
  
</>
  );
}

export default App;
