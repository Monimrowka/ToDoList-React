import React from 'react';

function Todo({toDos, deleteItemProp}){

    const deleteItem = (event)=>{
        deleteItemProp(toDos)
    }
    return(
        <div className='itemsContainer'>
            <input type="checkbox"></input>
            <p>{toDos.newTypedInput}</p>
            <div className='iconsContainer'>
                <button>Edit</button>
                <button>Save</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;
