import Todo from "./Todo";

const TodoList = ({ todoList }) => {
    return (
        <div>{todoList.map((todoItem) => {
            return (
                <Todo todoItem={todoItem}></Todo>
            )
        })}</div>
    )
}

export default TodoList;