import { Todo } from "./Todo"

const Todos = ({ todos, deleteTodo, updateTodo, orderTodos }) => {
    return (
        <div className="mt-5">
            <h2 className="text-center">Todos</h2>
            <ul className="list-group">
                {
                    todos.map( todo => {
                        return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                    })
                }
                {
                    todos.length === 0 && <li className="list-group-item text-center">No hay todos</li>
                }
            </ul>
        </div>
    )
}

export { Todos }