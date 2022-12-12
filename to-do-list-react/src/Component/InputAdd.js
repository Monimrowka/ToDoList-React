import React, { useState } from "react";

function InputAdd({newToDoInput}) {

        /* Step 3: When the new text is typed and stored in one state, the add button !should grab the value from that state to push into a new state.
            For this purpose, useState is used. It is a react hook that adds a state variable to the component. It comes as 
            const [variable, setter-function-for-the-variable] = useState(initialState). Here, an empty text ("") is assigned for the initial state of the text field value */
  const [newTypedInput, setNewTypedInput] = useState("");

        /* Step 5: */
  const addItemOnClick = () => {
    if(newTypedInput === ""){
      alert("type relevant to-do item before you proceed")
    } else {
    newToDoInput({
      id:(new Date()).getTime(), newTypedInput
    })
  }
    /*  reset the item with an empty input value */
    setNewTypedInput("");
}

  return (
    <div>

        {/* Step 1: Firstly, define the input field as a type = text, for user to add text or make changes inside the input field */}
      <input
        className="typeItems"
        type="text"
        placeholder="Type items in 40 characters"
        maxLength={40}
        value={newTypedInput}  /* binding the current state with the input field */
        /* Step 2: This part of code is used when user types some text inside the input field. Once typed, store/set the added text in the input field using event.
                console.log(event.target); displays the JSX element where changes are happening or where texts are added, use browser console to verify
                console.log(event.target.value); displays the exact changes made or added texts inside the event.target, use browser console to verify 
                This addition of text can be imagined as a state, which is set to an arbitrary name, for eg. setNewTypedInput that can be pushed to another 
                state by clicking the add button, see step 3 */
        onChange={(event) => {
          setNewTypedInput(event.target.value);
          // console.log(event.target.value);
        }}
      />
        {/* Step 4: When the user clicks the Add button, the add button !should grab the value from that state, and to push into a new state. It means, from
            user text field state into a destination element state with display */}
      <button 
      onClick={addItemOnClick}>Add</button>
    </div>
  );
}

export default InputAdd;
