import Todo from "./Todo";

const TodoList = ({ todoList }) => {
    return (
        <div>{todoList.map((todoItem, index) => {
            return (
                <Todo key={index}todoItem={todoItem}></Todo>
            )
        })}</div>
    )
}

export default TodoList;