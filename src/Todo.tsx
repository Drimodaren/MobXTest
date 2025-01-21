import { observer } from "mobx-react-lite"
import todoStore from "./store/todo"
import style from "./Todo.module.scss"

const Todo = observer(() => {
    return (
        <div className={style.todos}>{todoStore.todos.map(todo => {
            return (
                <div className={style.todo} key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={() => todoStore.completeTodo(todo.id)} />
                    {todo.title}
                    <button onClick={() => todoStore.removeTodo(todo.id)}>Remove</button>
                </div>
            )
        })}
        </div>
    )
})

export default Todo
