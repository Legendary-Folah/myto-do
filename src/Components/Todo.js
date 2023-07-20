import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Todo = () => {

    return (
        <div>
            <div>
                <h3>Todo Item</h3>
                <button>Del</button>
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    )
}

export default Todo;