const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "",
    host: "localhost",
    port: 5433,
    database: "todo_list"

})
module.exports = pool;
