import './App.css';
import Todo from './Component/Todo';

function App() {
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
          <input type="text" id="todoUserInput" className="todo-user-input" />
          <button className="add-todo-button">Add</button>
          <h1 className="todo-items-heading">
            My <span className="todo-items-heading-subpart">Tasks</span>
          </h1>
          <ul className="todo-items-container" id="todoItemsContainer">

          <Todo />
          
          </ul>
        </div>
      </div>
    </div>
  </div>
    </>
    

   
  );
}

export default App;
