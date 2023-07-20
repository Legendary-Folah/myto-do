import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Todo = () => {

    return (
        <div>
            <div>
                <h3>Todo Item</h3>
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>
        </div>
    )
}

export default Todo;