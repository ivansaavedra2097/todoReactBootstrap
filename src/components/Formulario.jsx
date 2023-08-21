import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ addTodo }) => {

    const [ todo, setTodo ] = useState({
        title: '',
        description: '',
        state: false,
        priority: false
    });

    const { title, description, state, priority } = todo;

    const handleSubmit = (e) => {
        e.preventDefault();

        if( !title.trim() || !description.trim()) {
            return Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Oops...',
                text: 'Debes llenar todos los campos!',
              });
               
        }

        addTodo({
            id: Date.now(),
            title,
            description,
            state,
            priority,
        });

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Todo agregado!',
            showConfirmButton: false,
            timer: 1500,
          }); 
    }

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value 
        });
    }

    return(
        <form className="container p-3" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title"
                className="form-control mb-2"
                onChange={handleChange}
                placeholder="Title" 
                id="" />
            <textarea 
                name="description" 
                id="" 
                className="form-control mb-2"
                onChange={handleChange}
                cols="30" 
                rows="5"></textarea>
            <select
                className="form-select mb-2" 
                name="state" 
                onChange={handleChange}>
                    <option value="false">Pendiente</option>
                    <option value="true">Completado</option>
            </select>
            <div className="form-check mb-2">
                <input
                    name="priority" 
                    type="checkbox" 
                    className="form-check-input"
                    onChange={handleChange}
                    id="todoCheck" />
                <label className="form-check-label" htmlFor="todoCheck">Prioridad</label>
            </div>
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}

export { Formulario }