import React from 'react';

function Todo({toDos, deleteItemProp}){

    /* In order to delete an item with the click event, firstly, the item should
       be located which is then regulated by the deleteIteProp passed through App.js */
    const deleteItem = (event)=>{
        deleteItemProp(toDos)
    }
    return(
        <div className='itemsContainer'>
            <input type="checkbox"></input>
            <p>{toDos.newTypedInput}</p>
            <div className='iconsContainer'>
                <button>Edit</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;
