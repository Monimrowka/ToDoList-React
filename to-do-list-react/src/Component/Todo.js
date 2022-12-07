import React from 'react';


const Todo = props =>
{ 
  console.log(props)
  const {textcontent} =props
  const {text} = textcontent

return(
    <li className="do-item-container d-flex flex-row justify-content-start">
    <input type="checkbox" className="checkbox-input"></input>
    <div className = "d-flex flex-row justify-content-between label-container">
        <label for="checkboxInput" className="checkbox-label">{text}
          </label>
          <div>
          <button className="deletebtn">Delete</button>
            </div>
          </div>
        </li>
      );
}
export default Todo;