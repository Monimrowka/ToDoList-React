import React from 'react';

const Todo = props =>
{
    const {Details} = props
    const {text} = Details

return(
   
    <div>
    <li className="todo-item-container d-flex flex-column"></li>
    <input type="checkbox" id="checkboxInput" className="checkbox-input" />
        
        <div className="d-flex flex-row label-container">
          <label for="checkboxInput" className="checkbox-label">{text}
    
          </label>
          
        </div>

    </div>
        
   
);
}






export default Todo;