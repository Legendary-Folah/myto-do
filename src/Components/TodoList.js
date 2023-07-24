import Todo from "./Todo";

const TodoList = ({ todoList }) => {
    return (
        <div>{todoList.map((todoItem) => {
            return (
                <Todo todoList={todoList} key={todoItem.id} todoItem={todoItem}></Todo>
            )
        })}</div>
    )
}

export default TodoList;