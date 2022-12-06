import React from 'react';


const Todo = props =>
{ console.log(props)
   const {textcontent} =props
    const {text} = textcontent

return(
   
    
    <li className="do-item-container d-flex flex-column">
    <div><input type="checkbox" className="checkbox-input" />
    </div>
    
    <div className = "d-flex flex-row label-container">
        <label for="checkboxInput" className="checkbox-label">{text}
          </label>
          <button className="deletebtn">Delete</button>
            
          </div>
        </li>
        

    
        );
}
export default Todo;