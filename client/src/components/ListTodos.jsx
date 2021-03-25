import React, { Fragment, useState, useEffect} from 'react';
import EditTodos from './EditTodos';


const ListTodos = () => {
    const [todo, setTodo] = useState([]);

    const deleteTodo= async id => {
        try {
            const response = await fetch("http://localhost:5000/todos/" + id, {
                method:"DELETE"
            });
            setTodo(todo.filter(x=>x.todo_id!==id))
        } catch (error) {
            console.log(error.message)
        }
    }
    const getTodo = async e => {
        try {
            const response = await fetch("http://localhost:5000/todos/");
            const data = await response.json()
            setTodo(data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getTodo();
    },[todo]);
    return (
        <Fragment>
           
            <table className="table table-bordered mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       todo.map(lista =>(
                           <tr key={lista.todo_id}>
                               <th scope="row">{lista.todo_id}</th>
                               <td>{lista.descripcion}</td>
                               <td> <EditTodos todo={lista} /></td>
                               <td> <button onClick={() => deleteTodo(lista.todo_id)} className="btn btn-danger" type="button">ELIMINAR</button></td>
                        </tr>))
                    } 
                </tbody>
            </table>
            
            
        </Fragment>
    );
}

export default ListTodos;
