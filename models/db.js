const mysql= require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user:   "root",
    password: "0112",
    database: "tienda",
    charset: "utf8mb4",
});
connection.connect((err) => {
    if (err) {
        console.error("error en la conexion a la base de datos:", err);
        return;
    }
    console.log("Conexion a la base de datos!");
});
 module.exports = connection;