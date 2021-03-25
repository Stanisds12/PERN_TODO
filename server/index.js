const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js")

//Middleware
app.use(cors());
app.use(express.json());
//RUTAS//

//CREATE TODO//
app.post("/todos", async(req, res) => {
        try {
            const { descripcion } = req.body
            const newTodo = await pool.query("INSERT INTO todo (descripcion) VALUES($1) RETURNING *", [descripcion]);
            res.json(newTodo.rows[0])
        } catch (error) {
            console.error(error.message)
        }
    })
    //GET ALL TODOS 
app.get("/todos", async(req, res) => {
    try {
        const newTodo = await pool.query(
            "SELECT * FROM todo"
        );
        res.json(newTodo.rows);
    } catch (error) {
        console.error(error.message);
    }
});
//GET un Todo
app.get("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const newTodo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [id]);
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});
//update
app.put("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { descripcion } = req.body;
        console.log(descripcion)
        const newTodo = await pool.query("UPDATE todo SET descripcion=$1 WHERE todo_id=$2", [descripcion, id]);
        res.json("updated");
    } catch (error) {
        console.error(error.message);
    }
});
//delete
app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const newTodo = await pool.query("DELETE FROM todo WHERE todo_id=$1", [
            id
        ]);
        res.json("DELETED");
    } catch (error) {
        console.error(error.message);
    }
});
app.listen(5000, () => {
    console.log("Servidor iniciou na porta 5000")
});