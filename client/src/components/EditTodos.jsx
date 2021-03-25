import React, { useState, useEffect } from 'react';

const EditTodos = ({ todo }) => {
    const [descripcion, setDescripcion] = useState(todo.descripcion);
    
    const handleEditar = async e => {
        e.preventDefault();
        try {
            const body = {descripcion}
            const response = await fetch("http://localhost:5000/todos/"+todo.todo_id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log(response)

        } catch (error) {
            alert(error.message)
        }
        
    }
    return (
        <React.Fragment>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${todo.todo_id}` }>
                Editar
</button>


            <div className="modal fade" id={`${todo.todo_id}` }tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button onClick={(e) => setDescripcion(todo.descripcion)} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="form-control" />

                        </div>
                        <div className="modal-footer">
                            <button onClick={(e) => setDescripcion(todo.descripcion)} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={(e)=>handleEditar(e)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
}

export default EditTodos;
