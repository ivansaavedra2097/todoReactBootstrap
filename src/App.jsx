import { useState, useEffect } from "react";
import { Formulario } from "./components/Formulario";
import { Todos } from "./components/Todos";


const initialStateTodos = JSON.parse(localStorage.getItem('todosReact')) || [];
//     {
//       id: 1,
//       title: "Primer todo",
//       description: "Descripcion de esta tarea",
//       state: true,
//       priority: true,
//     },
//     {
//       id: 2,
//       title: "Segundo todo",
//       description: "Descripcion de esta tarea",
//       state: false,
//       priority: true,
//     },
//     {
//       id: 3,
//       title: "Tercer todo",
//       description: "Descripcion de esta tarea",
//       state: false,
//       priority: false,
//     }
// ];

const App = () => {

  const [ todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem('todosReact', JSON.stringify( todos ));
  }, [todos]);

  const addTodo = todo => {
    setTodos([...todos, todo]);
    // setTodos( (prev) => [...prev, todo]);
  }

  const deleteTodo = id => {
    const newTodos = todos.filter( todo => todo.id !== id );
    setTodos( newTodos );
  }

  const updateTodo = id => {
    const newTodos = todos.map( todo => {
      if (todo.id === id)  todo.state = !todo.state;
      return todo; 
    })
    setTodos( newTodos );
  }

  const orderTodos = todos => {
    return todos.sort(( a,b ) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1;
      if (!a.priority) return 1;
    })
  }

  return(
    <div className="container mb-3">
      <h1 className="my-4">Práctica todos</h1>
      <Formulario addTodo={addTodo} />
      <Todos todos={orderTodos(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default App;