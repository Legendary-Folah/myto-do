import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Todo = () => {
    return (
        <div>
            <div>
                <h3>Todo Item</h3>
                <button>Del</button>
                <FontAwesomeIcon icon='fa-solid fa-trash' />
            </div>
        </div>
    )
}

export default Todo;