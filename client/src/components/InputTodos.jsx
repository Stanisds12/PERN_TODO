import React, { Fragment,useState } from 'react';

const InputTodos = () => {
    const [descripcion, setDescripcion] = useState("");
    const onSubmit = async e => {
        e.preventDefault();
        try {
            const body = { descripcion }
            const response = await fetch("http://localhost:5000/todos/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(body)
            })
            console.log(response)
           
       } catch (error) {
           alert(error.message)
       }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">TODO APP - PERN FULLSTACK</h1>
            <form onSubmit={onSubmit}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="input-group">
                            <input type="text" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} className="form-control" />
                            <span className="input-group-btn">
                                <button className="btn btn-primary" type="submit">ADD</button>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
            
        </Fragment >
    );
}

export default InputTodos;
