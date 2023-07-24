import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Todo = ({ todoItem }) => {

    return (
        <div>
            <div className="todoItem">
                <input type="checkbox" className="check"/>
                <h3 className="todoname">{todoItem.name}</h3>
                <FontAwesomeIcon icon={faTrashAlt} className="deletebutton"/>
            </div>
        </div>
    )
}

export default Todo;