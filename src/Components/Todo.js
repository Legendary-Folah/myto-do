import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Todo = ({ todoItem, todoList }) => {

    const handleDelete = () => {
        todoList.filter((item) => item.id !== todoItem.id)
    }

    return (
        <div>
            <div className="todoItem">
                <input type="checkbox" className="check"/>
                <h3 className="todoname">{todoItem.name}</h3>
                <FontAwesomeIcon icon={faTrashAlt} onClick={handleDelete} className="deletebutton"/>
            </div>
        </div>
    )
}

export default Todo;