import './App.css';
import InputAdd from './Component/InputAdd';
import Todo from './Component/Todo';
import Footer from './Component/Footer'
import { useState, useEffect } from 'react';

function App({day}) {
  /* Step 5: For each new to-do item delivered from InputAdd.js, this value has to be added 
     and its state has to be updated/changed. For this, an array of added value
     and the updated value (added + old) are defined in an array using useState, 
     Initially if no value exists, the value is kept an empty array [].*/
     const localStorageItems = localStorage.getItem(day) || "[]";

     const [newToDoArray, setNewToDoArray] = useState(JSON.parse(localStorageItems));

  /* Once the add button is clicked, the "setNewToDoArray", which is a function
     should add up the existing value and the increment value to get 
     an updated value. Here, JS spread operator (...) is used to quickly copy 
     all or part of an existing array or object into another array or object */
  const addToDos = (item) =>{
    setNewToDoArray([...newToDoArray, item])
  };

  /* useEffect hook is used to perform side effects in the component, such as fetching data, directly
     updating the DOM, and timers. It accepts two arguments and comes as: 
     useEffect(function, dependency). If no dependency, then useEffect runs on every render. i.e.
     when input changes, a render happens which triggers another effect. In order to stop this, 
     dependency as an array is passed to useEffect, which makes useEffect to run only on the first render.
     In cases when any event such as click or add item is used, then value changes. It makes useEffect
     dependent on another variable. It makes variable update to make the useEffect run again. For example,
     in the candle project, a candle has to diminish continuously at the rate of 1 % per 2 seconds. This
     updates the height variable and passes it to the set variable. In such instance, [prop, state] has
     to be passed. At least a single argument is required in such cases.*/
  useEffect(() => {
    /* the setItem(keyName, keyValue) method of the storage interface adds the key to the given 
       storage object or update that key's value it it already exists. Here stringify() is a method
       to convert any javascript value compatible to the corresponding JSON script value for the storage interface*/
      localStorage.setItem(day, JSON.stringify(newToDoArray));
  }, [newToDoArray]);

  const deletedToDos = (item) => {
    // console.log(item)
    /* filter is a method to find any values from an array that meets the desired criteria inside 
       its call-back function, and creates a sub-array without changing the original array. Here, the
       filter method loops through the array named "newToDoArray", and executes the call-back function
       for each to-do items. Our call-back function checks if the ids of the deleted (or clicked) to-do item "item" 
       from Todo.js is not equal to the entire array. Only those to-do items which are not equal are 
       now passed as a new array for the "setNewToDoArray". Here deletedToDos is the parameter of the 
       deleteItemProp that comes from the Todo.js */
    setNewToDoArray(newToDoArray.filter(toDoItem => toDoItem.id !== item.id))
    // console.log(deletedToDos)
    // console.log(setNewToDoArray)
  };

  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="create-task-heading">
                Create <span className="create-task-heading-subpart">Task</span>
              </h1>
              <InputAdd newToDoInput={addToDos} />
              <h1 className="todo-items-heading">
                My <span className="todo-items-heading-subpart">Tasks</span>
              </h1>
              {/* Step 6: alike filter, map is also a method to create an array executing a call-back function for
                       every element in an original array, but does not check for any criteria. Instead it provides
                       further details about the array elements. Here, the map method access the "newToDoArray" array
                       to execute a call-back function with argument "toDoItem" for each element inside the "newToDoArray" 
                       array to perform some task. Inside the Todo.js, these elements will be passed and 
                       provided with a unique id, and other necessary information for events such as delete, edit, save and others. */}
              {newToDoArray.map(toDoItem => <Todo key={toDoItem.id} toDos={toDoItem} deleteItemProp={deletedToDos}/>)}
            </div>
          </div>
        </div>
        <Footer footContent={"Copyright reserved to MANS"}/>

    </div>
    

   
  );
}

export default App;
