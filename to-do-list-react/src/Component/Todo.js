import React from 'react';


const Todo = props =>
{ console.log(props)
   const {textcontent} =props
    const {text} = textcontent

return(
   
    
    <li className="todo-item-container d-flex flex-column">
    <input type="checkbox" className="checkbox-input" />
        
        <div className = "d-flex flex-row label-container">
        
         
          <label for="checkboxInput" className="checkbox-label">{text}
          </label>
          <button className="deletebtn">Delete</button>
            
          </div>
        </li>
        

    
        );
}
export default Todo;