import Todo from "./Todo";

const TodoList = ({ todoList }) => {
    return (
        <div>{todoList.map((todoItem) => {
            return (
                <Todo todoItem={todoItem.name}></Todo>
            )
        })}</div>
    )
}

export default TodoList;